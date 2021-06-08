import { GET_POST_DATA, GET_USER, POST_COMMENT } from "../actions/actionsType";

const initalState = {
  data: {},
  user: {},
  newComment: {},
  path: '/posts',
  pathUsers: '/users',
};

const postReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_POST_DATA:
      return {...state, data: payload}
    case GET_USER:
      return {...state, user: payload}
    case POST_COMMENT:
      return {...state, newComment: payload}
    default:
      return state;
  }
}

export default postReducer;