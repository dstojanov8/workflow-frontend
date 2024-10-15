import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistedAccountReducer } from "./persisted-reducers";

export const store = configureStore({
  reducer: {
    account: persistedAccountReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
