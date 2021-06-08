import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import useDebounce from '../hooks/useDebounce';

import { getPosts } from '../redux/actions';
import PostsGrid from "../components/posts/PostsGrid";
import PostsList from "../components/posts/PostsList";
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';

const Posts = ({ posts, config, getPosts }) => {
  const debouncedValue = useDebounce(config.query, 500);

  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    getPosts(config.path, config.page, config.limit, config.order, debouncedValue);
    setIsSearching(false);
  }, [getPosts, config.path, config.page, config.limit, config.order, debouncedValue]);

  return (
    <div className="uk-section">
      <div className="uk-container">
        <NavBar isSearching={isSearching} setIsSearching={setIsSearching}/>
        {config.view === 'grid'
        ? <PostsGrid posts={posts} />
        : <PostsList posts={posts} />}
        <Footer />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
    config: {
      path: state.postsReducer.path,
      page: state.postsReducer.page,
      limit: state.postsReducer.limit,
      order: state.postsReducer.order,
      query: state.postsReducer.query,
      view: state.postsReducer.view,
      total: state.postsReducer.total
    },
  }
}

export default connect(mapStateToProps, { getPosts })(Posts);