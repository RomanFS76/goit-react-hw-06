import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
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

const persistedContactsReducer = persistReducer(
  {
    key: "local-contacts",
    storage,
    whitelist: ["items"],
  },
  contactsReducer
);

const persistedFiltersReducer = persistReducer(
  {
    key: "local-input",
    storage,
    whitelist: ["name"],
  },
  filtersReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: persistedFiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
