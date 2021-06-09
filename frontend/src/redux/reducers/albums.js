import {
  GET_DATA,
  SET_NEXT_ALBUMS,
  GET_MORE_DATA,
  SET_QUERY_ALBUMS,
  SET_PAGE_ALBUMS,
  SET_LIMIT_ALBUMS,
  SET_ORDER_ALBUMS,
} from "../actions/actionsType";

const initialState = {
  albums: [],
  path: '/albums',
  page: 1,
  limit: 6,
  order: 'asc',
  query: '',
  next: 6,
  total: null
}

const albumsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {...state, albums: payload.data, total: payload.total};
    case SET_PAGE_ALBUMS:
      return {...state, page: payload};
    case SET_LIMIT_ALBUMS:
      return {...state, limit: payload};
    case SET_ORDER_ALBUMS:
      return {...state, order: payload};
    case SET_QUERY_ALBUMS:
      return {...state, query: payload};
    case SET_NEXT_ALBUMS:
      return {...state, next: payload}
    case GET_MORE_DATA:
      return {...state, albums: payload}
    default:
      return state;
  }
}

export default albumsReducer;