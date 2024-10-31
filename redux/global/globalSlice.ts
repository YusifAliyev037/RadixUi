import { PayloadAction, createSlice } from '@reduxjs/toolkit';




export interface Score {
score:number
idea:string
time:string
suggestion:string
key:string
}


const initialState: Score = {
    score: 0,
    idea: "",
    time: "",
    suggestion:"",
    key:""
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    fillScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    fillIdea: (state, action: PayloadAction<string>) => {
      state.idea = action.payload;
    },
    fillTimeStamp: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
    fillKey: (state, action: PayloadAction<string>) => {
      state.key = action.payload;
    },
    fillSuggestion: (state, action: PayloadAction<string>) => {
      state.suggestion = action.payload;
    },
    
   
   
  },
});

export const {
  fillScore,
  fillIdea,
  fillTimeStamp,
  fillKey,
  fillSuggestion
} = globalSlice.actions;

export default globalSlice.reducer;
