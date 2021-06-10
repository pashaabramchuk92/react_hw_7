import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setLimitPosts, setLimitAlbums } from '../../redux/actions'; 

const ShowOnPage = ({
  pathAlbums,
  limitPosts,
  limitAlbums,
  setLimitPosts,
  setLimitAlbums
}) => {

  const handleChange = (e) => {
    window.location.pathname === pathAlbums
    ? setLimitAlbums(e.target.value)
    : setLimitPosts(e.target.value)
  }

  const selectedLimit = window.location.pathname === pathAlbums ? limitAlbums : limitPosts;

  return (
    <select
      className="uk-select uk-width-small uk-margin-left"
      value={selectedLimit}
      onChange={(e) => handleChange(e)}
    >
      <option value="6">6</option>
      <option value="12">12</option>
      <option value="24">24</option>
    </select>
  )
}

ShowOnPage.propTypes = {
  pathAlbums: PropTypes.string,
  limitPosts: PropTypes.number,
  limitAlbums: PropTypes.number,
  setLimitPosts: PropTypes.func,
  setLimitAlbums: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
      pathAlbums: state.albumsReducer.path,
      limitPosts: state.postsReducer.limit,
      limitAlbums: state.albumsReducer.limit
    }
}

export default connect(mapStateToProps, { setLimitPosts, setLimitAlbums })(React.memo(ShowOnPage));