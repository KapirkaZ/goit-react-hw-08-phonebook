import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import contactsReducer from "./contacts/contactsReducers";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { contacts } from "./contacts";
import { auth } from "../redux/auth";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
// const contactsPersistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["filter"],
// };

const { store } = configureStore({
  reducer: { auth: persistReducer(authPersistConfig, auth), contacts },

  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };
