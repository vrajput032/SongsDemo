import { combineReducers } from 'redux';
import Types from './actionTypes';
const INITIAL_STATE = {
  songsList: [],
};
function albumReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.GET_ALBUM:
      return { ...state, songsList: action.payload.songsList };
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  albumReducer,
});
export default rootReducer;
