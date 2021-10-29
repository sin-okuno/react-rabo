import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postReducer from './features/postSlice';
import todoReducer from './features/todoSlice';
import processListReducer from './features/pmp/processListSlice';
import ittoReducer from './features/pmp/ittoSlice';
import knowledgeAreaReducer from './features/pmp/knowledgeAreaSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    post: postReducer,
    processList: processListReducer,
    itto: ittoReducer,
    knowledgeArea: knowledgeAreaReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
