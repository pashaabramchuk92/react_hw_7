import {
  GET_POSTS,
  SET_PAGE,
  SET_LIMIT,
  SET_ORDER,
  SET_QUERY,
  SET_VIEW,
  SET_NEXT,
  GET_MORE_DATA
} from "../actions/actionsType";


const initialState = {
  posts: [],
  path: '/posts',
  page: 1,
  limit: 6,
  order: 'asc',
  query: '',
  view: 'grid',
  next: 6,
  total: null
}
// 
const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {...state, posts: payload.data, total: payload.total};
    case SET_PAGE:
      console.log(payload);
      return {...state, page: payload};
    case SET_LIMIT:
      return {...state, limit: payload};
    case SET_ORDER:
      return {...state, order: payload};
    case SET_QUERY:
      return {...state, query: payload};
    case SET_VIEW:
      return {...state, view: payload}
    case SET_NEXT:
      return {...state, next: payload}
    case GET_MORE_DATA:
      return {...state, posts: payload}
    default:
      return state;
  }
}

export default postsReducer;