import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import sideBarReducer from './sidebar-service/reducer';

const middleWare = [thunk];

const rootReducer = combineReducers({
  sideBarRedux: sideBarReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(...middleWare)));

export default store;
