import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userEventsReducer from './user-events';


const rootReducer = combineReducers({
  userEvents: userEventsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
