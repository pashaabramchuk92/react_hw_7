import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setQueryPosts, setQueryAlbums } from '../../redux/actions';

const SearchBar = ({
  pathAlbums,
  isSearching,
  searchValuePosts,
  searchValueAlbums,
  setIsSearching,
  setQueryPosts,
  setQueryAlbums
}) => {

  const handleSearch = (e) => {
    setIsSearching(true);

    window.location.pathname === pathAlbums
    ? setQueryAlbums(e.target.value)
    : setQueryPosts(e.target.value)
  }

  return (
    <form
      className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right"
    >
      <span uk-search-icon="true" className="uk-icon uk-search-icon"></span>
      <span
        className="uk-search-icon uk-search-icon-flip"
        uk-spinner="ratio: 0.6"
        style={{visibility: isSearching ? '' : 'hidden'}}
      ></span>
      <input
        className="uk-search-input"
        type="search"
        placeholder="Search..."
        value={
          window.location.pathname === pathAlbums
          ? searchValueAlbums
          : searchValuePosts
        }
        onInput={(e) => handleSearch(e)}
      />
    </form>
  )
}

SearchBar.propTypes = {
  pathAlbums: PropTypes.string,
  isSearching: PropTypes.bool,
  searchValuePosts: PropTypes.string,
  searchValueAlbums: PropTypes.string,
  setIsSearching: PropTypes.func,
  setQueryPosts: PropTypes.func,
  setQueryAlbums: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
      pathAlbums: state.albumsReducer.path,
      searchValuePosts: state.postsReducer.query,
      searchValueAlbums: state.albumsReducer.query,
    }
}

export default connect(mapStateToProps, { setQueryPosts, setQueryAlbums })(React.memo(SearchBar));