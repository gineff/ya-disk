import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../types';

const initialState: AppState = {
  activeResource: null,
  activeDialog: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveResource: (state, action) => {
      state.activeResource = action.payload || null;
    },
    showDialog: (state, action) => {
      state.activeDialog = action.payload || null;
    },
    showFile: (state, action) => {
      state.activeDialog = 'viewFile';
      state.activeResource = action.payload || null;
    },
  },
});

export const { setActiveResource, showDialog, showFile } = appSlice.actions;

export default appSlice.reducer;
