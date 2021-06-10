import React from 'react';
import { connect } from "react-redux";
// import { getLikeData, setLikePost, setLikeAlbum } from '../../redux/actions';

const HeaderLiked = ({
  pathPosts,
  pathAlbums
}) => {
  return (
    <table className="uk-table uk-table-divider uk-table-justify">
      <thead>
        <tr>
          <th>Title</th>
          <th className="uk-text-right">Delete</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => {
  return {
    pathAlbums: state.albumsReducer.path,
    pathPosts: state.postsReducer.path,
  }
}

export default React.memo(
  connect(mapStateToProps)(HeaderLiked)
);