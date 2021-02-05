import configureStoreBoilerplate from './configure-store-boilerplate';
import appReducer from '../modules/app';

export const configureStore = (initialState = {}) => configureStoreBoilerplate(
  {
    app: appReducer,
  }, [],
  initialState,
);
