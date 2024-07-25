import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from "./reducer/reducer";
import { thunk } from "redux-thunk";
import { useDispatch } from "react-redux";
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export type storeT = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch | any>();
 // 假设你的类型定义文件是 types.ts

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  storeT,
  unknown,
  Action<string>
>;
