import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import useDebounce from '../hooks/useDebounce';

import PostsGrid from "../components/posts/PostsGrid";
import NavBar from '../components/navbar/NavBar';
import { getPosts } from '../redux/actions';

const Posts = ({ posts, config, getPosts }) => {
  const debouncedValue = useDebounce(config.query, 500);

  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    getPosts(config.path, config.page, config.limit, config.order, debouncedValue);
    setIsSearching(false);
  }, [getPosts, config.path, config.page, config.limit, config.order, debouncedValue]);


  return (
    <div className="uk-main">
      {/* <HeaderContainer /> */}
      <div className="uk-section">
        <div className="uk-container">
          <NavBar isSearching={isSearching} setIsSearching={setIsSearching}/>
          <PostsGrid posts={posts}/>

        </div>
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
    },
  }
}

export default connect(mapStateToProps, { getPosts })(Posts);