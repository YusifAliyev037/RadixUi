import { PayloadAction, createSlice } from '@reduxjs/toolkit';




export interface Score {
    data: Record<string, any>;
}


const initialState: Score = {
    data: {},
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
   
    fillData: (state, action: PayloadAction<Record<string,any>>) => {
      state.data = action.payload;
    },   
   
  },
});

export const {
  fillData,
 
} = globalSlice.actions;

export default globalSlice.reducer;
