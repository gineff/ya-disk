import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../types';

const initialState: AppState = {
  resourceIdForContextMenu:  null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showResourceContextMenu: (state, action) => {
      state.resourceIdForContextMenu = action.payload || null;
    },
    hideResourceContextMenu: (state) => {
      state.resourceIdForContextMenu = null;
    },
  },
});

export const { showResourceContextMenu, hideResourceContextMenu } = appSlice.actions;

export default appSlice.reducer;
