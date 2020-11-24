import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  pegawaiListReducer,
  pegawaiTambahReducer,
  pegawaiUpdateReducer,
  pegawaiDeleteReducer,
} from './reducers/pegawaiReducers';

const middleware = [thunk];

const reducer = combineReducers({
  pegawaiList: pegawaiListReducer,
  pegawaiTambah: pegawaiTambahReducer,
  pegawaiUpdate: pegawaiUpdateReducer,
  pegawaiDelete: pegawaiDeleteReducer,
});
const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
