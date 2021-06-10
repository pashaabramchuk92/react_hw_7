import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getLikePosts, getLikeAlbums, setLikePost, setLikeAlbum } from '../../redux/actions';

const LikeBtn = ({
  postId,
  albumId,
  isLikePost,
  isLikeAlbum,
  pathPosts,
  pathAlbums,
  getLikePosts,
  getLikeAlbums,
  setLikePost,
  setLikeAlbum
}) => {

  const checkLocation = window.location.pathname === pathAlbums;

  const handleClickLike = () => {
    if(checkLocation) {
      setLikeAlbum(pathAlbums, albumId, !isLikeAlbum);
      getLikeAlbums(pathAlbums);
    } else {
      setLikePost(pathPosts, postId, !isLikePost);
      getLikePosts(pathPosts);
    }
  }

  const color = checkLocation ? (!isLikeAlbum ? '' : 'red') : (!isLikePost ? '' : 'red')

  return (
    <button
      className="uk-icon-link"
      uk-icon={checkLocation ? "icon: heart; ratio: 2" : "heart"}
      style={{color: color, cursor: 'pointer'}}
      onClick={handleClickLike}
    > </button>
  )
}

LikeBtn.propTypes = {
  postId: PropTypes.number,
  albumId: PropTypes.number,
  isLikePost: PropTypes.object,
  isLikeAlbum: PropTypes.object,
  pathPosts: PropTypes.string,
  pathAlbums: PropTypes.string,
  getLikePosts: PropTypes.func,
  getLikeAlbums: PropTypes.func,
  setLikePost: PropTypes.func,
  setLikeAlbum: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    pathAlbums: state.albumsReducer.path,
    pathPosts: state.postsReducer.path,
  }
}

export default connect(mapStateToProps, { getLikePosts, getLikeAlbums, setLikePost, setLikeAlbum })(React.memo(LikeBtn));