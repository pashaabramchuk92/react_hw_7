import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLikeData, setLikePost, setLikeAlbum } from '../../redux/actions';

const LikeBtn = ({
  postId,
  albumId,

  likedPosts,
  likedAlbums,

  pathPosts,
  pathAlbums,

  getLikeData,
  setLikePost,
  setLikeAlbum
}) => {

  const checkLocation = window.location.pathname === pathAlbums;

  const postIsLiked = likedPosts.find(x => x.id === postId);
  const albumIsLiked = likedAlbums.find(x => x.id === albumId);

  useEffect(() => {
    checkLocation ? getLikeData(pathAlbums) : getLikeData(pathPosts);
  }, [checkLocation, getLikeData, pathAlbums, pathPosts]);

  const handleClick = () => {
    if(checkLocation) {
      setLikeAlbum(pathAlbums, albumId, !albumIsLiked);
      getLikeData(pathAlbums);
    } else {
      setLikePost(pathPosts, postId, !postIsLiked);
      getLikeData(pathPosts);
    }
  }

  const color = checkLocation ? (albumIsLiked ? 'blue' : '') : (postIsLiked ? 'blue' : '')

  return (
    <button
      className="uk-icon-link"
      uk-icon={checkLocation ? "icon: heart; ratio: 2" : "heart"}
      style={{color: color, cursor: 'pointer'}}
      onClick={handleClick}
    > </button>
  )
}

const mapStateToProps = (state) => {
  return {
    pathAlbums: state.albumsReducer.path,
    pathPosts: state.postsReducer.path,

    likedPosts: state.postsReducer.likedPosts,
    likedAlbums: state.albumsReducer.likedAlbums,
  }
}

export default connect(mapStateToProps, { getLikeData, setLikePost, setLikeAlbum })(React.memo(LikeBtn));