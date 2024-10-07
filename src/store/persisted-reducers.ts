import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import accountReducer from "./account/accountSlice";

const PERSISTED_KEY_ACCOUNT = "persist_account";

const accountPersistConfig = {
  key: PERSISTED_KEY_ACCOUNT,
  storage,
};

export const persistedAccountReducer = persistReducer(
  accountPersistConfig,
  accountReducer
);
