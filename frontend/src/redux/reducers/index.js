import { combineReducers } from "redux";
import postsReducer from './posts';
import postReducer from './post';

const rootReducer = combineReducers({ postsReducer, postReducer });

export default rootReducer;