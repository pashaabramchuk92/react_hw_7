import { connect } from 'react-redux';
import Header from '../components/header/Header';
import NavBar from '../components/navbar/NavBar';
import AlbumsGrid from '../components/albums/AlbumsGrid';
import useDebounce from '../hooks/useDebounce';
import { useEffect, useState } from 'react';
import { getData } from '../redux/actions';
import Footer from '../components/footer/Footer';


const Albums = ({ albums, params, getData }) => {

  const debouncedValue = useDebounce(params.query, 500);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    getData(params.path, params.page, params.limit, params.order, debouncedValue);
    setIsSearching(false);
  }, [getData, params.path, params.page, params.limit, params.order, debouncedValue]);

  return (
    <div className="uk-main">
      <Header />
      <div className="uk-section">
        <div className="uk-container">
          <NavBar isSearching={isSearching} setIsSearching={setIsSearching} />
          <AlbumsGrid albums={albums} />
          <Footer />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    albums: state.albumsReducer.albums,
    params: {
      path: state.albumsReducer.path,
      page: state.albumsReducer.page,
      limit: state.albumsReducer.limit,
      order: state.albumsReducer.order,
      query: state.albumsReducer.query,
      total: state.albumsReducer.total
    }
  }
}

export default connect(mapStateToProps, { getData })(Albums);



//  /* <NavBar /> */}
//   {/* <AlbumsGrid albums={albums} />
//   <LoadMore
//     handleLoadMore={handleLoadMore}
//     isLoading={isLoading}
//     setIsLoding={setIsLoding}
//   />
//   <Pagination
//     total={total}
//     limit={limit}
//     page={page}
//     setPage={setPage}
//   /> */