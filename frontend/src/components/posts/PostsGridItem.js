import PropTypes from 'prop-types';
import React from 'react';
import { Link } from "react-router-dom";

import LikeBtn from '../generic/LikeBtn';

const PostsGridItem = ({ post, likedPosts, likeHandler }) => {
  return (
    <div>
    <div className="uk-card uk-card-default uk-margin-medium-bottom">
      <div className="uk-card-header">
        <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
          {`${post.title.slice(0, 10)}...`}
          <LikeBtn
            id={post.id}
            isLiked={Boolean(likedPosts.find(x => x.id === post.id))}
            likeHandler={likeHandler}
          />
        </h3>
      </div>
      <div className="uk-card-body  uk-text-break">
       {`${post.body}`}
      </div>
      <div className="uk-card-footer">
        <Link
          to={`/posts/${post.id}`}
          className="uk-button uk-button-text"
        >Read more</Link>
      </div>
    </div>
  </div>
  )
}

PostsGridItem.propTypes = {
  post: PropTypes.object,
  likedPosts: PropTypes.array
}

export default React.memo(PostsGridItem);