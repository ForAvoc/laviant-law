import {SET_MODAL_STATE} from '../actions-type';

const initState = {
  isModalState: false,
};

const modalReducer = (state = initState, action) => {
  const {type, payload} = action;
  switch (type) {
    case SET_MODAL_STATE:
      return {...state, isModalState: payload};
    default:
      return state;
  }
};

export default modalReducer;
