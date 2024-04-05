import { ConfigureStoreOptions, configureStore } from '@reduxjs/toolkit';
// import todoSlice, { TodoSliceState } from './todoSlice';
import userSlice, { UserSliceState } from './userSlice';
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
//   // todoSlice: TodoSliceState;
//   userSlice: UserSliceState
// };

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userSlice)

const storeOptions = {
  // reducer: {
  //   todoSlice,
  //   persistedReducer
  // },
  reducer: persistedReducer,
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
