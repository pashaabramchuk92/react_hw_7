import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import BlogApp from './containers/BlogApp';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BlogApp />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);