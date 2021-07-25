import {SET_SIDEBAR_STATE} from '../actions-type';

const initState = {
  isSideBarOpened: false,
};

const sideBarReducer = (state = initState, action) => {
  const {type, payload} = action;
  switch (type) {
    case SET_SIDEBAR_STATE:
      return {...state, isSideBarOpened: payload};
    default:
      return state;
  }
};

export default sideBarReducer;
