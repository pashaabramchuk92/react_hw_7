import PropTypes from 'prop-types';

import PostsGridItem from "./PostsGridItem";

const PostsGrid = ({ posts, likedPosts, likeHandler }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {
        posts.length > 0
        ? posts.map(post => 
            <PostsGridItem
              key={post.id}
              post={post}
              likedPosts={likedPosts}
              likeHandler={likeHandler}
            />)
        : <div className="uk-align-center">Sorry, posts not found :(</div>
      }
    </div>
  )
}

PostsGrid.propTypes = {
  posts: PropTypes.array
}

export default PostsGrid;