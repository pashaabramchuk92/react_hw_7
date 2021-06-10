import api from '../../utils/api';
import {
  SET_LIMIT_POSTS,
  SET_ORDER_POSTS,
  SET_QUERY_POSTS,
  SET_PAGE_POSTS,
  SET_QUERY_ALBUMS,
  SET_PAGE_ALBUMS,
  SET_LIMIT_ALBUMS,
  SET_ORDER_ALBUMS,

  SET_NEXT_POSTS,
  SET_NEXT_ALBUMS,

  GET_DATA,
  SET_VIEW,
  GET_MORE_DATA,
  GET_POST_DATA,
  GET_USER,
  POST_COMMENT,
  SET_LIKE_POST,
  SET_LIKE_ALBUM,
  GET_LIKE_POSTS,
  GET_LIKE_ALBUMS
} from './actionsType';

export const getData = (path, page, limit, order, query) => {
  return async (dispatch) => {
    try {
      const { data, headers } = await api.get(`${path}?_page=${page}&_limit=${limit}&_sort=id&_order=${order}&title_like=${query}`);
      dispatch({
        type: GET_DATA,
        payload: {
          data: data,
          total: headers['x-total-count']
        }
      });
    } catch(error) {
      console.log(`Something went wrong... ${error}`);
    }
  }
};

export const getMoreData = (path, end, order) => {
  return async (dispatch) => {
    try {
      const { data } = await api.get(`${path}?_start=0&_end=${end}&_sort=id&_order=${order}`);
      dispatch({ type: GET_MORE_DATA, payload: data });
    } catch (error) {
      console.log(`Something went wrong... ${error}`);
    }
  }
};

export const getPostData = (path, id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.get(`${path}/${id}?_embed=comments`);
      dispatch({ type: GET_POST_DATA, payload: data });
    } catch (error) {
      console.log(`Something went wrong... ${error}`);
    }
  }
};

export const getUserData = (path, id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.get(`${path}/${id}`);
      dispatch({ type: GET_USER, payload: data });
    } catch (error) {
      console.log(`Something went wrong... ${error}`);
    }
  }
};

export const postComment = (path, id, commentData) => {
  return async (dispatch) => {
    try {
      const { data } = await api.post(`${path}/${id}/comments`, {
        ...commentData
      });
      dispatch({type: POST_COMMENT, payload: data});
    } catch (error) {
      console.log(`Something went wrong... ${error}`);
    }
  }
};

export const getLikePosts = (path) => {
  return async (dispatch) => {
    try {
      const { data } = await api.get(`${path}?like_like=true`);
      dispatch({type: GET_LIKE_POSTS, payload: data})
    } catch (error) {
      console.log(`Something went wrong... ${error}`);
    }
  }
}

export const getLikeAlbums = (path) => {
  return async (dispatch) => {
    try {
      const { data } = await api.get(`${path}?like_like=true`);
      dispatch({type: GET_LIKE_ALBUMS, payload: data})
    } catch (error) {
      console.log(`Something went wrong... ${error}`);
    }
  }
}

export const setLikePost = (path, id, like) => {
  return async (dispatch) => {
    try {
      const { data } = await api.patch(`${path}/${id}`, {
        like
      });
      dispatch({type: SET_LIKE_POST, payload: data.like})
    } catch (error) {
      console.log(`Something went wrong... ${error}`);
    }
  }
}

export const setLikeAlbum = (path, id, like) => {
  return async (dispatch) => {
    try {
      const { data } = await api.patch(`${path}/${id}`, {
        like
      });
      dispatch({type: SET_LIKE_ALBUM, payload: data.like})
    } catch (error) {
      console.log(`Something went wrong... ${error}`);
    }
  }
}

export const setView = (view) => ({
  type: SET_VIEW,
  payload: view
});

// posts
export const setNextPosts = (next) => ({
  type: SET_NEXT_POSTS,
  payload: next,
});

export const setLimitPosts = (limit) => ({
  type: SET_LIMIT_POSTS,
  payload: limit,
});

export const setOrderPosts = (order) => ({
  type: SET_ORDER_POSTS,
  payload: order
});

export const setQueryPosts = (query) => ({
  type: SET_QUERY_POSTS,
  payload: query
});

export const setPagePosts = (page) => ({
  type: SET_PAGE_POSTS,
  payload: page
});

// albums
export const setNextAlbums = (next) => ({
  type: SET_NEXT_ALBUMS,
  payload: next,
});

export const setLimitAlbums = (limit) => ({
  type: SET_LIMIT_ALBUMS,
  payload: limit,
});

export const setOrderAlbums = (order) => ({
  type: SET_ORDER_ALBUMS,
  payload: order
});

export const setQueryAlbums = (query) => ({
  type: SET_QUERY_ALBUMS,
  payload: query
});

export const setPageAlbums = (page) => ({
  type: SET_PAGE_ALBUMS,
  payload: page
});




