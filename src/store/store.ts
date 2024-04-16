import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {quizReducer} from "../modules/quiz/quiz.slice.ts";


const quizPersistConfig = {
  key: 'quiz',
  storage,
};

const rootReducer = combineReducers({
  quiz: persistReducer(quizPersistConfig, quizReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
