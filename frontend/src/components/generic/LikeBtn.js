import PropTypes from 'prop-types';
import React from 'react';

const LikeBtn = ({ id, isLiked, likeHandler, albumHeart }) => {
  return (
    <button
      className="uk-icon-link"
      uk-icon={albumHeart ? "icon: heart; ratio: 2" : "heart"}
      style={{color: isLiked ? 'blue' : '', cursor: 'pointer'}}
      onClick={() => likeHandler(id, !isLiked)}
    > </button>
  )
}

LikeBtn.propTypes = {
  id: PropTypes.number,
  isLiked: PropTypes.bool,
  likeHandler: PropTypes.func,
  albumHeart: PropTypes.bool
}

export default React.memo(LikeBtn);