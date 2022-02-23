import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const persistConfing = {
  key: 'trybe-wallet',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfing, rootReducer);

export const store = createStore(persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
