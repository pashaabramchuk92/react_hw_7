import { getData } from '../../utils/api';
import {
  GET_POSTS,
  SET_LIMIT,
  SET_ORDER,
  SET_QUERY,
  SET_VIEW,
  SET_NEXT,
  GET_MORE_DATA,
  SET_PAGE,
  GET_POST_DATA,
  GET_USER
} from './actionsType';

export const getPosts = (path, page, limit, order, query) => {
  return async (dispatch) => {
    try {
      const response = await getData.get(`${path}?_page=${page}&_limit=${limit}&_sort=title&_order=${order}&title_like=${query}`)

      dispatch({
        type: GET_POSTS,
        payload: {
          data: response.data,
          total: response.headers['x-total-count']
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
      const { data } = await getData.get(`${path}?_start=0&_end=${end}&_sort=title&_order=${order}`);
      dispatch({ type: GET_MORE_DATA, payload: data });
    } catch (error) {
      console.log(`Something went wrong... ${error}`);
    }
  }
};

export const getPostData = (path, id) => {
  return async (dispatch) => {
    try {
      const { data } = await getData.get(`${path}/${id}?_embed=comments`);
      dispatch({ type: GET_POST_DATA, payload: data });
    } catch (error) {
      console.log(`Something went wrong... ${error}`);
    }
  }
};

export const getUserData = (path, id) => {
  return async (dispatch) => {
    try {
      const { data } = await getData.get(`${path}/${id}`);
      dispatch({ type: GET_USER, payload: data });
    } catch (error) {
      console.log(`Something went wrong... ${error}`);
    }
  }
};

// export const postComment = (path, id, data) => {
//   return async (dispatch) => {
//     try {
//       const response = await 
//     }
//   }
// };

export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});

export const setOrder = (order) => ({
  type: SET_ORDER,
  payload: order
});

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query
});

export const setView = (view) => ({
  type: SET_VIEW,
  payload: view
});

export const setNext = (next) => ({
  type: SET_NEXT,
  payload: next,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page
});


