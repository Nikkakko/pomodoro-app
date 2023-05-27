import { createSlice } from '@reduxjs/toolkit';

interface PomodoState {}

const initialState: PomodoState = {};

export const pomodoSlice = createSlice({
  name: 'pomodo',
  initialState,
  reducers: {},
});

// export const {} = pomodoSlice.actions;

export default pomodoSlice.reducer;
