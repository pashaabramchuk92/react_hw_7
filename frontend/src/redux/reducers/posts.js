import { viewType } from "../../utils/enums";
import {
  GET_DATA,
  SET_VIEW,
  SET_NEXT_POSTS,
  GET_MORE_DATA,
  SET_LIMIT_POSTS,
  SET_ORDER_POSTS,
  SET_QUERY_POSTS,
  SET_PAGE_POSTS,
  SET_LIKE_POST,
  GET_LIKE_POSTS,
  RESET_FILTERS_POSTS
} from "../actions/actionsType";

const initialState = {
  posts: [],
  path: '/posts',
  page: 1,
  limit: 6,
  order: 'asc',
  query: '',
  view: viewType.GRID,
  next: 6,
  total: null,
  likedPosts: [],
  like: false
}

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {...state, posts: payload.data, total: payload.total};
    case SET_PAGE_POSTS:
      return {...state, page: payload};
    case SET_LIMIT_POSTS:
      return {...state, limit: payload};
    case SET_ORDER_POSTS:
      return {...state, order: payload};
    case SET_QUERY_POSTS:
      return {...state, query: payload};
    case SET_VIEW:
      return {...state, view: payload};
    case SET_NEXT_POSTS:
      return {...state, next: payload};
    case GET_MORE_DATA:
      return {...state, posts: payload};
    case GET_LIKE_POSTS:
      return {...state, likedPosts: payload};
    case SET_LIKE_POST:
      return {...state, like: payload};
    case RESET_FILTERS_POSTS:
      return {
        ...state,
        page: initialState.page,
        limit: initialState.limit,
        order: initialState.order,
        view: initialState.view,
        next: initialState.next
      };
    default:
      return state;
  }
}

export default postsReducer;