import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import languageReducer, { LanguageState } from '../reducer/LanguageReducer';

import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  language: languageReducer,
});

export type RootState = {
  language: LanguageState;
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, languageReducer);

const store = configureStore({
  reducer: {
    language: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export const useAppDispatch = () => useDispatch();

export default store;

