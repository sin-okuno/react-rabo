import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { PostType } from '../../types/post';

export interface postState {
  value: PostType;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: postState = {
  value: null,
  status: 'idle',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTodo: (state, action: PayloadAction<PostType>) => {
      state.value = action.payload;
    },
  },

  
});

export const { setTodo } = postSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTodo = (state: RootState):PostType => state.post.value;

export default postSlice.reducer;
