import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import useDebounce from '../hooks/useDebounce';
import {
  getData,
  getLikePosts,
  setLikePost,
  setView,
  setOrderPosts,
  setLimitPosts,
  setQueryPosts,
  getMoreData,
  setNextPosts,
  setPagePosts,
} from '../redux/actions';

import Header from '../components/header/Header';
import NavBar from '../components/navbar/NavBar';
import PostsGrid from "../components/posts/PostsGrid";
import PostsList from "../components/posts/PostsList";
import Footer from '../components/footer/Footer';
import { viewType } from '../utils/enums';

const Posts = ({ params, functions }) => {

  const debouncedValue = useDebounce(params.query, 500);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    functions.getData(params.path, params.page, params.limit, params.order, debouncedValue);
    setIsSearching(false);

  }, [functions, params.path, params.page, params.limit, params.order, debouncedValue]);

  useEffect(() => {
    functions.getMoreData(params.path, params.next, params.order);
    setIsLoading(false);
  }, [functions, params.path, params.next, params.order]);

  const likeHandler = (...args) => {
    functions.setLike(params.path, ...args);
    functions.getLiked(params.path);
  }
  
  const dislikeHandler = (...args) => functions.setLike(...args);
  
  const handleChangeOrder = (e) => functions.setOrder(e.target.value);

  const handleChangeLimit = (e) => functions.setLimit(e.target.value);

  const handleSearch = (e) => functions.setQuery(e.target.value);

  const handleLoadMore = () => functions.setNext(params.next + params.limit);

  const handleClickNext = (e) => {
    e.preventDefault();
    functions.setPage(params.page + 1)
  };
  
  const handleClickPrev = (e) => {
    e.preventDefault();
    functions.setPage(params.page - 1);
  }

  const handleClickPage = (currentPage) => functions.setPage(currentPage);

  return (
    <div className="App">
      <div className="uk-main">
        <Header path={params.path} dislikeHandler={dislikeHandler} />
        <div className="uk-section">
          <div className="uk-container">
            <NavBar
              isSearching={isSearching}
              limit={params.limit}
              order={params.order}
              query={params.query}
              view={params.view}
              setIsSearching={setIsSearching}
              setView={functions.setView}
              handleChangeOrder={handleChangeOrder}
              handleChangeLimit={handleChangeLimit}
              handleSearch={handleSearch}
            />
            {
              params.view === viewType.GRID
              ? <PostsGrid
                posts={params.posts}
                likedPosts={params.likedPosts}
                likeHandler={likeHandler}
              />
              : <PostsList
                posts={params.posts}
                likedPosts={params.likedPosts}
                likeHandler={likeHandler}
              />
            }
            <Footer
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              page={params.page}
              total={params.total}
              limit={params.limit}
              handleLoadMore={handleLoadMore}
              handleClickNext={handleClickNext}
              handleClickPrev={handleClickPrev}
              handleClickPage={handleClickPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Posts.propTypes = {
  params: PropTypes.shape({
    posts: PropTypes.array,
    likedPosts: PropTypes.array,
    page: PropTypes.number,
    limit: PropTypes.number,
    path: PropTypes.string,
    order: PropTypes.string,
    query: PropTypes.string,
    view: PropTypes.string,
  }),
  functions: PropTypes.shape({
    getData: PropTypes.func,
    getLikePosts: PropTypes.func,
    setLikePost: PropTypes.func,
    setView: PropTypes.func,
    setOrder: PropTypes.func,
    setLimit: PropTypes.func,
    setQuery: PropTypes.func
  })
}

const mapStateToProps = (state) => {
  return {
    params: {
      posts: state.postsReducer.posts,
      path: state.postsReducer.path,
      page: state.postsReducer.page,
      limit: state.postsReducer.limit,
      order: state.postsReducer.order,
      query: state.postsReducer.query,
      view: state.postsReducer.view,
      likedPosts: state.postsReducer.likedPosts,
      next: state.postsReducer.next,
      total: state.postsReducer.total
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    functions: {
      getData: (path, page, limit, order, query) => dispatch(getData(path, page, limit, order, query)),
      getLiked: (path) => dispatch(getLikePosts(path)),
      setLike: (path, ...args) => dispatch(setLikePost(path, ...args)),
      setView: (viewType) => dispatch(setView(viewType)),
      setOrder: (value) => dispatch(setOrderPosts(value)),
      setLimit: (value) => dispatch(setLimitPosts(value)),
      setQuery: (value) => dispatch(setQueryPosts(value)),
      getMoreData: (path, end, order) => dispatch(getMoreData(path, end, order)),
      setNext: (next, limit) => dispatch(setNextPosts(next, limit)),
      setPage: (page) => dispatch(setPagePosts(page)),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);