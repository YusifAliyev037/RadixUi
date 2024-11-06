import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Score {
  data: Record<string, any>[];
  count:number
}

const initialState: Score = {
  data: [], 
  count:0
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    fillData: (state, action: PayloadAction<Record<string, any>>) => {
      state.data.push(action.payload); 
    },
    fillCount:(state, action: PayloadAction<number>) => {
        state.count = action.payload;
    }
  },
});

export const { fillData,fillCount } = globalSlice.actions;
export default globalSlice.reducer;
