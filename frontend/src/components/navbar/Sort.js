import React from 'react';
import { connect } from 'react-redux';
import { setOrderPosts, setOrderAlbums } from '../../redux/actions';

const Sort = ({ pathAlbums, orderPosts, orderAlbums, setOrderPosts, setOrderAlbums }) => {

  const handleChange = (e) => {
    window.location.pathname === pathAlbums
    ? setOrderAlbums(e.target.value)
    : setOrderPosts(e.target.value)
  }

  const selectedOrder = window.location.pathname === pathAlbums ? orderAlbums : orderPosts

  const statusOptions = [
    {value: 'asc', id: 0, selected: true},
    {value: 'desc', id: 1, selected: false}
  ];

  return (
    <select
      className="uk-select uk-width-small uk-margin-auto-left"
      name="selected"
      value={selectedOrder}
      onChange={(e) => handleChange(e)}
    >
      {statusOptions.map(option => (
        <option
          key={option.id}
          value={option.value}
          selected={option.selected}
        >{option.value.toLocaleUpperCase()}</option>
      ))}
      {/* <option value="asc" selected={selectedOrder}>ASC</option>
      <option value="desc" selected={selectedOrder}>DESC</option> */}
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