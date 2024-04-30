import { configureStore, combineReducers, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import recorderReducer from './recorder';
import userEventsReducer from './user-events';


type AppDispatch = ThunkDispatch<RootState, undefined, UnknownAction>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
  recorder: recorderReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;