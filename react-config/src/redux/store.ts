import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from "./reducer/reducer";
import { thunk } from "redux-thunk";
import { useDispatch } from "react-redux";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export type storeT = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch | any>();
