import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "superbet-zuia-root",
  storage,
  whitelist: ["mqt"]
};
/* eslint-enable no-param-reassign */

export default function configureAppStore(state = {}) {
  const combinedReducers: Reducer = combineReducers(rootReducer);

  const persistedReducer = persistReducer(persistConfig, combinedReducers);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware],
    preloadedState: state
  });

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}
