import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Posts from "./Posts";
import PostPage from './PostPage';
import Albums from "./Albums";
import { connect } from "react-redux";

const history = createBrowserHistory();

const BlogApp = ({ postPath, albumsPath }) => {
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
  }
}

export default connect(mapStateToProps)(BlogApp);
