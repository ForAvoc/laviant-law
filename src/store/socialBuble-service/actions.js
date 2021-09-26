import {SET_SOCIAL_BUBLE_STATE} from '../actions-type';

export const actionSetSocialBubleState = (state) => (dispatch) => {
  dispatch({type: SET_SOCIAL_BUBLE_STATE, payload: state});
};
