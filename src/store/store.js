import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import sideBarReducer from './sidebar-service/reducer';
import modalReducer from './modal-service/reducer';
import socialBubleReducer from './socialBuble-service/reducer';

const middleWare = [thunk];

const rootReducer = combineReducers({
  sideBarRedux: sideBarReducer,
  modalRedux: modalReducer,
  socialBubleRedux: socialBubleReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(...middleWare)));

export default store;
