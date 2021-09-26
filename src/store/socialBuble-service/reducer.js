import {SET_SOCIAL_BUBLE_STATE} from '../actions-type';

const initState = {
  isModalState: false,
};

const socialBubleReducer = (state = initState, action) => {
  const {type, payload} = action;
  switch (type) {
    case SET_SOCIAL_BUBLE_STATE:
      return {...state, isModalState: payload};
    default:
      return state;
  }
};

export default socialBubleReducer;
