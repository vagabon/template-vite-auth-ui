import {
  Action,
  AdminReducers,
  AuthReducers,
  CommonReducers,
  NotificationReducers,
  TypedUseSelectorHook,
  combineReducers,
  configureStore,
  useDispatch,
  useSelector,
} from '@vagabond-inc/react-boilerplate-app';
import HomeReducers from 'module/home/reducer/HomeReducer';
import { Reducer } from 'react';

export type ReducerType = Reducer<RootState, Action>;

const reducers = combineReducers({
  home: HomeReducers,
  auth: AuthReducers,
  common: CommonReducers,
  admin: AdminReducers,
  notification: NotificationReducers,
});

const store = configureStore({ reducer: reducers });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
