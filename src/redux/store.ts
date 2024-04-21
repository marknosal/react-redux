import { configureStore, combineReducers } from '@reduxjs/toolkit';
import recorderReducer from './recorder';
import userEventsReducer from './user-events';


const rootReducer = combineReducers({
  userEvents: userEventsReducer,
  recorder: recorderReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;