import {SET_SIDEBAR_STATE} from '../actions-type';

export const actionSetSidebarState = (state) => (dispatch) => {
  dispatch({type: SET_SIDEBAR_STATE, payload: state});
};
