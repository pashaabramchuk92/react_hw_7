import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import {
  getData,
  getLikeAlbums,
  setLikeAlbum,
  setOrderAlbums,
  setLimitAlbums,
  setQueryAlbums,
  getMoreData,
  setNextAlbums,
  setPageAlbums
} from '../redux/actions';

import Header from '../components/header/Header';
import NavBar from '../components/navbar/NavBar';
import AlbumsGrid from '../components/albums/AlbumsGrid';
import Footer from '../components/footer/Footer';


const Albums = ({ params, functions }) => {

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
    functions.setPage(params.page - 1)
  };

  const handleClickPage = (currentPage) => functions.setPage(currentPage);

  return (
    <div className="App">
      <div className="uk-main">
        <Header path={params.path} dislikeHandler={dislikeHandler} />
        <div className="uk-section">
          <div className="uk-container">
            <NavBar
              order={params.order}
              limit={params.limit}
              query={params.query}
              isSearching={isSearching}
              setIsSearching={setIsSearching}
              handleChangeOrder={handleChangeOrder}
              handleChangeLimit={handleChangeLimit}
              handleSearch={handleSearch}
            />
            <AlbumsGrid
              albums={params.albums}
              likedAlbums={params.likedAlbums}
              likeHandler={likeHandler}
            />
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

Albums.propTypes = {
  params: PropTypes.shape({
    albums: PropTypes.array,
    likedAlbums: PropTypes.array,
    page: PropTypes.number,
    limit: PropTypes.number,
    order: PropTypes.string,
    path: PropTypes.string,
    query: PropTypes.string,
  }),
  functions: PropTypes.shape({
    getData: PropTypes.func,
    getLikeAlbums: PropTypes.func,
    setLikeAlbum: PropTypes.func,
    setOrder: PropTypes.func,
    setLimit: PropTypes.func,
    setQuery: PropTypes.func
  })
}

const mapStateToProps = (state) => {
  return {
    params: {
      albums: state.albumsReducer.albums,
      path: state.albumsReducer.path,
      page: state.albumsReducer.page,
      limit: state.albumsReducer.limit,
      order: state.albumsReducer.order,
      query: state.albumsReducer.query,
      likedAlbums: state.albumsReducer.likedAlbums,
      next: state.albumsReducer.next,
      total: state.albumsReducer.total
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    functions: {
      getData: (path, page, limit, order, query) => dispatch(getData(path, page, limit, order, query)),
      getLiked: (path) => dispatch(getLikeAlbums(path)),
      setLike: (path, ...args) => dispatch(setLikeAlbum(path, ...args)),
      setOrder: (value) => dispatch(setOrderAlbums(value)),
      setLimit: (value) => dispatch(setLimitAlbums(value)),
      setQuery: (value) => dispatch(setQueryAlbums(value)),
      getMoreData: (path, end, order) => dispatch(getMoreData(path, end, order)),
      setNext: (next, limit) => dispatch(setNextAlbums(next, limit)),
      setPage: (page) => dispatch(setPageAlbums(page)),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);