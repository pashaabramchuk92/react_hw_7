import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import useDebounce from '../hooks/useDebounce';
import { getData } from '../redux/actions';

import Header from '../components/header/Header';
import PostsGrid from "../components/posts/PostsGrid";
import PostsList from "../components/posts/PostsList";
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';

const Posts = ({ posts, params, getData }) => {

  const debouncedValue = useDebounce(params.query, 500);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    getData(params.path, params.page, params.limit, params.order, debouncedValue);
    setIsSearching(false);
  }, [getData, params.path, params.page, params.limit, params.order, debouncedValue]);

  return (
    <div className="App">
      <div className="uk-main">
        <Header />
        <div className="uk-section">
          <div className="uk-container">
            <NavBar isSearching={isSearching} setIsSearching={setIsSearching} />
            {params.view === 'grid'
            ? <PostsGrid posts={posts} />
            : <PostsList posts={posts} />}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
    params: {
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

export default connect(mapStateToProps, { getData })(Posts);