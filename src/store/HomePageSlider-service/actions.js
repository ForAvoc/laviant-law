import {SET_HOME_PAGE_SLIDER_STATE} from '../actions-type';

export const actionSetHomePageSliderState = (state) => (dispatch) => {
  dispatch({type: SET_HOME_PAGE_SLIDER_STATE, payload: state});
};
