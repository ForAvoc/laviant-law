import {SET_MODAL_STATE} from '../actions-type';

export const actionSetModalState = (state) => (dispatch) => {
  dispatch({type: SET_MODAL_STATE, payload: state});
};
