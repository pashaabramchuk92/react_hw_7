import React from 'react';
import { connect } from 'react-redux';
import { setLimitPosts, setLimitAlbums } from '../../redux/actions'; 

const ShowOnPage = ({ pathAlbums, setLimitPosts, setLimitAlbums }) => {

  const handleChange = (e) => {
    window.location.pathname === pathAlbums
    ? setLimitAlbums(e.target.value)
    : setLimitPosts(e.target.value)
  }

  return (
    <select
      className="uk-select uk-width-small uk-margin-left"
      onChange={(e) => handleChange(e)}
    >
      <option value="6">6</option>
      <option value="12">12</option>
      <option value="24">24</option>
    </select>
  )
}

const mapStateToProps = (state) => {
  return {
      pathAlbums: state.albumsReducer.path,
    }
}

export default connect(mapStateToProps, { setLimitPosts, setLimitAlbums })(React.memo(ShowOnPage));