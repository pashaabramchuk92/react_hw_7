import PropTypes from 'prop-types';
import React from "react";
import { Link } from "react-router-dom";

import LikeBtn from "../generic/LikeBtn";

const PostListItem = ({ post, likedPosts, likeHandler }) => {
  return (
    <div>
      <div
        className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin uk-grid"
        uk-grid="true"
      >
        <div className="uk-card-media-left uk-cover-container uk-first-column">
          <img src="https://picsum.photos/600/400" alt="" className="uk-cover" />
          <canvas width="600" height="400"></canvas>
        </div>
        <div className="">
          <div className="uk-card-body">
              <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
              {`${post.title.slice(0, 10)}...`}
              <LikeBtn
                id={post.id}
                isLiked={Boolean(likedPosts.find(x => x.id === post.id))}
                likeHandler={likeHandler}
              />
              </h3>
            <p className="uk-text-truncate">
            {post.body}
            </p>
            <Link
              to={`/posts/${post.id}`}
              className="uk-button uk-button-text"
            >Read more</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

PostListItem.propTypes = {
  post: PropTypes.object,
  likedPosts: PropTypes.array
}

export default React.memo(PostListItem);