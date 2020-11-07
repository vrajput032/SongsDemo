import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from './root-reducer';

const enhancer = compose(applyMiddleware(thunk, logger));

const config: any = {
  key: 'root',
  keyPrefix: '',
  storage: AsyncStorage,
  whitelist: ['albumReducer'],
  debug: true,
};
const storeReducer: any = persistReducer(config, reducers);

const store = createStore(storeReducer, enhancer);
persistStore(store);
export default store;
