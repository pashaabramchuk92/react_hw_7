import PropTypes from 'prop-types';
import React from 'react';

const SearchBar = ({ isSearching, searchValue, handleSearch }) => {
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
        value={searchValue}
        onInput={(e) => handleSearch(e)}
      />
    </form>
  )
}

SearchBar.propTypes = {
  isSearching: PropTypes.bool,
  searchValue: PropTypes.string,
  handleSearch: PropTypes.func
}

export default React.memo(SearchBar);