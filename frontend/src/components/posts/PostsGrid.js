import { connect } from "react-redux";
import PostsGridItem from "./PostsGridItem";
import { setPage } from '../../redux/actions';

const PostsGrid = ({ posts, setPage }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {
        posts?.length > 0
        ? posts.map(post => <PostsGridItem key={post.id} post={post} />)
        : <div className="uk-align-center">Sorry, posts not found :(</div>
      }
      <button onClick={() => setPage('/posts', 2)}>next page</button>
    </div>
    // <PostsGridItem />
  )
}

export default connect(null, { setPage })(PostsGrid);