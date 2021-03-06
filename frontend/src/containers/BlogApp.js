import PropTypes from 'prop-types';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { connect } from "react-redux";
import { getLikePosts, getLikeAlbums } from '../redux/actions';

import Posts from "./Posts";
import PostPage from './PostPage';
import Albums from "./Albums";
import { useEffect } from 'react';

const history = createBrowserHistory();

const BlogApp = ({ postPath, albumsPath, getLikePosts, getLikeAlbums }) => {

  useEffect(() => {
    getLikePosts(postPath);
    getLikeAlbums(albumsPath);
  }, [postPath, albumsPath, getLikePosts, getLikeAlbums]);

  return (
    <Router history={history}>
      <Switch>
        <Route
          path='/'
          exact
          component={Posts}
        />
        <Route
          path={`${postPath}/:id`}
          component={PostPage}
        />
        <Route
          path={albumsPath}
          component={Albums}
        />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    postPath: state.postsReducer.path,
    albumsPath: state.albumsReducer.path,
    getLikePosts: PropTypes.func,
    getLikeAlbums: PropTypes.func
  }
}

BlogApp.propTypes = {
  postPath: PropTypes.string,
  albumsPath: PropTypes.string
}

export default connect(mapStateToProps, { getLikePosts, getLikeAlbums })(BlogApp);
