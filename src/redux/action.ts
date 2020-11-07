import { Dispatch } from 'redux';
import Types from './actionTypes';
import { getData } from '../service/api';
export function getAlbumList() {
  return async (dispatch: Dispatch) => {
    const response = await getData();
    dispatch({
      type: Types.GET_ALBUM,
      payload: { songsList: response.results },
    });
  };
}
