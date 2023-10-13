// 합치는 잡업하는 곳
import { combineReducers } from "redux";
import movieReducer from './movieReducer';
export default combineReducers({
  //이 객체 안에 리듀서 여러개 만들어줄거임
  movie:movieReducer,
})