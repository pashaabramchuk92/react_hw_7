import PropTypes from 'prop-types';
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPostData, getUserData, postComment, setLikePost } from '../redux/actions';

import Header from '../components/header/Header';
import Comment from "../components/post/Comment";
import FormNewComment from "../components/post/FormNewComment";

const PostPage = ({
  match: {
    params: { id }
  },
  post,
  path,
  user,
  pathUsers,
  getPostData,
  getUserData,
  postComment,
  setLikePost
}) => {

  useEffect(() => {
    getPostData(path, id);
  }, [getPostData, path, id]);

  useEffect(() => {
    getUserData(pathUsers, post.userId)
  }, [getUserData, pathUsers, post.userId]);

  const dislikeHandler = (...args) => setLikePost(...args);

  return (
    <div className="App">
      <div className="uk-main">
        <Header path={path} dislikeHandler={dislikeHandler} />
        <div className="uk-section">
          <div className="uk-container">
            <Link
              to='/'
              style={{color: '#333', fontSize: '1rem', fontWeight: '600'}}
            >
              <i className="fa fa-home"></i>
              <span> Home</span>
            </Link>
            <h1 className="uk-heading-bullet uk-margin-medium-bottom">
              <span>{post.title}</span>
              <a className="uk-text-small" href="/"> {user.name}</a>
            </h1>
            <div className="uk-article uk-dropcap uk-margin-large-bottom">
              <p>{post.body}</p>
            </div>
            <hr />
            <h3 className="uk-margin-remove-top">Comments:</h3>
            {post?.comments?.map(comment => <Comment key={comment.id} comment={comment} /> )}
            <FormNewComment id={post.id} path={path} postComment={postComment} />
          </div>
        </div>
      </div>
    </div>
  )
}

PostPage.propTypes = {
  id: PropTypes.string,
  post: PropTypes.object,
  path: PropTypes.string,
  user: PropTypes.object,
  pathUsers: PropTypes.string,
  getPostData: PropTypes.func,
  getUserData: PropTypes.func,
  postComment: PropTypes.func,
  setLikePost: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    post: state.postReducer.data,
    path: state.postReducer.path,
    pathUsers: state.postReducer.pathUsers,
    user: state.postReducer.user,
  }
}

export default connect(mapStateToProps, { getPostData, getUserData, postComment, setLikePost })(PostPage);