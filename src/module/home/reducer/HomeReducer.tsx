import { createSlice } from '@reduxjs/toolkit';

export interface IHomeReducerState {}

const initialState: IHomeReducerState = {};

export const HomeReducer = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {},
});
export const HomeAction = { ...HomeReducer.actions };
const HomeReducers = HomeReducer.reducer;
export default HomeReducers;
