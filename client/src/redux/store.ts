import { ConfigureStoreOptions, configureStore } from '@reduxjs/toolkit';
// import todoSlice, { TodoSliceState } from './todoSlice';
import userSlice, { UserSliceState } from './userSlice';
import statSlice, { StatSliceState } from './statSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


// type StoreType = {
//   statSlice: StatSliceState;
//   userSlice: UserSliceState
// };

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userSlice)

const storeOptions = {
  reducer: {
    statSlice,
    persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
};

export const store = configureStore(storeOptions);

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
