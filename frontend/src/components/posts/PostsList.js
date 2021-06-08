import PostsListItem from "./PostsListItem"

const PostsList = ({ posts }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
      {
        posts.length > 0
        ? posts.map(post => <PostsListItem key={post.id} post={post} />)
        : <div className="uk-align-center">Sorry, posts not found :(</div>
      }
    </div>
  )
}

export default PostsList;