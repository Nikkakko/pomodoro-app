import { createSlice } from '@reduxjs/toolkit';

interface PomodoState {
  focusLength: number;
  shortBreakLength: number;
  longBreakLength: number;
  promodosUntilLongBreak: number;
  promodosCompleted: number;
  isPaused: boolean;
  isSettingsOpen: boolean;
  mode: 'focus' | 'short break' | 'long break';
}

const initialState: PomodoState = {
  focusLength: 25,
  shortBreakLength: 5,
  longBreakLength: 15,
  promodosUntilLongBreak: 4,
  promodosCompleted: 0,
  isPaused: true,
  isSettingsOpen: false,
  mode: 'focus',
};

export const pomodoSlice = createSlice({
  name: 'pomodo',
  initialState,
  reducers: {
    setFocusLength: (state, action) => {
      if (action.payload < 1) {
        state.focusLength = 1;
        return;
      }

      state.focusLength = action.payload;
    },

    setMode: (state, action) => {
      state.mode = action.payload;
    },

    setShortBreakLength: (state, action) => {
      if (action.payload < 1) {
        state.shortBreakLength = 1;
        return;
      }
      state.shortBreakLength = action.payload;
    },

    setLongBreakLength: (state, action) => {
      if (action.payload < 1) {
        state.longBreakLength = 1;
        return;
      }
      state.longBreakLength = action.payload;
    },

    setPromodosCompleted: (state, action) => {
      state.promodosCompleted = state.promodosCompleted + action.payload;
    },

    setPromodosUntilLongBreak: (state, action) => {
      if (action.payload < 1) {
        state.promodosUntilLongBreak = 1;
        return;
      }
      state.promodosUntilLongBreak = action.payload;
    },

    setIsPausedTrue: (state, action) => {
      state.isPaused = action.payload;
    },

    setIsSettingsOpen: (state, action) => {
      state.isSettingsOpen = action.payload;
    },
  },
});

export const {
  setFocusLength,
  setIsPausedTrue,
  setIsSettingsOpen,
  setShortBreakLength,
  setLongBreakLength,
  setPromodosUntilLongBreak,
  setMode,
  setPromodosCompleted,
} = pomodoSlice.actions;

export default pomodoSlice.reducer;
