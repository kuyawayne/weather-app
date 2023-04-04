import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/theme";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfiguration  = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfiguration, themeReducer);

export const store = configureStore({
  reducer: {
    theme: persistedReducer
  },
  middleware: [thunk]
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);