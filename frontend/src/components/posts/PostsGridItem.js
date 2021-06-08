import React from 'react';
import { Link } from "react-router-dom";

const PostsGridItem = ({ post }) => {
  return (
    <div>
    <div className="uk-card uk-card-default uk-margin-medium-bottom">
      <div className="uk-card-header">
        <h3 className="uk-card-title uk-text-truncate uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
          {`${post.title}`}
          {/* <LikeBtn
            id={post.id}
            isLiked={likedPosts.find(x => x.id === post.id)}
            like={post.like}
          /> */}
        </h3>
      </div>
      <div className="uk-card-body uk-text-break">
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

export default React.memo(PostsGridItem);