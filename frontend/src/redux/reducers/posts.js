import { GET_POSTS, SET_PAGE, SET_LIMIT, SET_ORDER, SET_QUERY } from "../actions/actionsType";


const initialState = {
  posts: [],
  path: '/posts',
  page: 1,
  limit: 6,
  order: 'asc',
  query: ''
}

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      console.log(payload);
      return {...state, posts: payload};
    case SET_PAGE:
      console.log(payload);
      return {...state, page: payload};
    case SET_LIMIT:
      return {...state, limit: payload};
    case SET_ORDER:
      return {...state, order: payload};
    case SET_QUERY:
      return {...state, query: payload};
    default:
      return state;
  }
}

export default postsReducer;