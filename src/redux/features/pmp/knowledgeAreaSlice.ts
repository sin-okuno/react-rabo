import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { KnowledgeAreaType } from "../../../types/pmp";
import axios from "axios";

export interface knowledgeAreaState {
  value: Array<KnowledgeAreaType>;
  status: "idle" | "loading" | "failed";
}

const initialState: knowledgeAreaState = {
  value: null,
  status: "idle",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const knowledgeAreaAsync = createAsyncThunk(
  "knowledgeArea", 
  async () => 
  {
    const response = await axios.get<string>(`/csv/pmp/knowledgeAreaList.csv`);
    const dataArray:string[][] = [];
    const dataString = response.data.split("\n");
    const knowledgeArea:Array<KnowledgeAreaType> = []
    for (let row = 0; row < dataString.length; row++) {
      dataArray[row] = dataString[row].split(",");
      console.log(dataArray[row].length);

      for (let col = 0; col < dataArray[row].length; col = col+2) {
        const process:KnowledgeAreaType = {
          id:dataArray[row][col+0],
          knowledgeArea:dataArray[row][col+1],
        }
        knowledgeArea.push(process)
      }
    }

    // The value we return becomes the `fulfilled` action payload
    return knowledgeArea;
  }
);

export const knowledgeAreaSlice = createSlice({
  name: "knowledgeArea",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(knowledgeAreaAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(knowledgeAreaAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      });
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectknowledgeArea = (state: RootState): Array<KnowledgeAreaType> =>state.knowledgeArea.value;

export default knowledgeAreaSlice.reducer;
