import { combineReducers } from "redux";
import postsReducer from './posts';
import postReducer from './post';
import albumsReducer from './albums';

const rootReducer = combineReducers({ postsReducer, postReducer, albumsReducer });

export default rootReducer;