import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {counterReducer} from './features';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 

const rootReducer = combineReducers({
  counter: counterReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: [], //blacklisting a store attribute name, will not persist that store attribute.
};

export const store = configureStore({
  reducer: {},
});
