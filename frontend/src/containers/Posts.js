import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import PostsGrid from "../components/posts/PostsGrid";
import NavBar from '../components/navbar/NavBar';
import { getPosts } from '../redux/actions';

const Posts = ({ posts, getPosts }) => {

  const [path, ] = useState('/posts');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [order, setOrder] = useState('asc');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getPosts(path, page, limit, order, query);
  }, [getPosts, path, page, limit, order, query]);

  return (
    <div className="uk-main">
      {/* <HeaderContainer /> */}
      <div className="uk-section">
        <div className="uk-container">
          <NavBar />
          <PostsGrid posts={posts}/>

        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getPosts,
//   }
// }

export default connect(mapStateToProps, { getPosts })(Posts);