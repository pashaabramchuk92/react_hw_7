import { getData } from '../../utils/api';
import {
  GET_POSTS,
  SET_LIMIT,
  SET_ORDER,
  SET_QUERY,
  SET_VIEW
} from './actionsType';

export const getPosts = (path, page, limit, order, query) => {
  return async (dispatch) => {
    try {
      const { data } = await getData.get(`${path}?_page=${page}&_limit=${limit}&_sort=title&_order=${order}&title_like=${query}`)
      dispatch({ type: GET_POSTS, payload: data });
    } catch(error) {
      console.log(`Something went wrong... ${error}`);
    }
  }
}

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
})