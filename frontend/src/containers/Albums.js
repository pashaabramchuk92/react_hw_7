import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import { getData } from '../redux/actions';

import Header from '../components/header/Header';
import NavBar from '../components/navbar/NavBar';
import AlbumsGrid from '../components/albums/AlbumsGrid';
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

Albums.propTypes = {
  albums: PropTypes.array,
  params: PropTypes.object,
  getData: PropTypes.func,
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