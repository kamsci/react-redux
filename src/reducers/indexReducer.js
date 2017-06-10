import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
  /* 'courses' same as 'courses: courses' - ES6 shorthand property names */
});

export default rootReducer;