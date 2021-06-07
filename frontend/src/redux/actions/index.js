import { getData } from '../../utils/api';
import { GET_POSTS, SET_PAGE } from './actionsType';

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

export const setPage = (path, page) => {
  return async (dispatch) => {
    try {
      const response = await getData.get(`${path}?_page=${page}`)
      const x = response.config.url.slice(13);
      console.log(x);
      dispatch({ type: SET_PAGE, payload: x })
    } catch(error) {
      console.log(error);
    }
  }
}