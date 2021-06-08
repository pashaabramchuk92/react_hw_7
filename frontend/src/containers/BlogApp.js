import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Header from "../components/header/Header";
import Posts from "./Posts";
import PostPage from './PostPage';

const history = createBrowserHistory();

const BlogApp = () => {
  return (
    <Router history={history}>
      <Switch>
        <div className="App">
          <div className="uk-main">
            <Header />
            <Route
              path='/'
              exact
              component={Posts}
            />
            <Route
              path='/posts/:id'
              component={PostPage}
            />
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default BlogApp;
