import React from 'react';
import { connect } from 'react-redux';
import { setOrderPosts, setOrderAlbums } from '../../redux/actions';

const Sort = ({ pathAlbums, orderPosts, orderAlbums, setOrderPosts, setOrderAlbums }) => {

  const handleChange = (e) => {
    window.location.pathname === pathAlbums
    ? setOrderAlbums(e.target.value)
    : setOrderPosts(e.target.value)
  }

  const selectedOrder = 
    window.location.pathname === pathAlbums
    ? orderAlbums
    : orderPosts;

  return (
    <select
      className="uk-select uk-width-small uk-margin-auto-left"
      name="selected"
      value={selectedOrder}
      onChange={(e) => handleChange(e)}
    >
      <option value="asc">ASC</option>
      <option value='desc'>DESC</option>
    </select>
  )
}

const mapStateToProps = (state) => {
  return {
      pathAlbums: state.albumsReducer.path,
      orderPosts: state.postsReducer.order,
      orderAlbums: state.albumsReducer.order
    }
}

export default connect(mapStateToProps, { setOrderPosts, setOrderAlbums })(React.memo(Sort));