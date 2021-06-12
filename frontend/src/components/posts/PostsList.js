import PropTypes from 'prop-types';

import PostsListItem from "./PostsListItem"

const PostsList = ({ posts, likedPosts, likeHandler }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
      {
        posts.length > 0
        ? posts.map(post => 
          <PostsListItem
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

PostsList.propTypes = {
  posts: PropTypes.array
}

export default PostsList;