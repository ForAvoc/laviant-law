import {SET_HOME_PAGE_SLIDER_STATE} from '../actions-type';

const initState = {
  isHomePageSliderState: 0,
};

const homePageSliderReducer = (state = initState, action) => {
  const {type, payload} = action;
  switch (type) {
    case SET_HOME_PAGE_SLIDER_STATE:
      return {...state, isHomePageSliderState: payload};
    default:
      return state;
  }
};

export default homePageSliderReducer;
