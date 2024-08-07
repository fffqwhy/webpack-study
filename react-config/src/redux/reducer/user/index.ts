import { UPDATE_USER_INFO } from "../../action/user/actionType";
import { reduxUserInfoI } from "./type";

const initUserInfo: reduxUserInfoI = {
  userName: "付全有",
  loginTime: new Date(),
};
export const userInfoReducer = (state: reduxUserInfoI = initUserInfo, actions: any):reduxUserInfoI => {
  switch (actions.type) {
    case UPDATE_USER_INFO:
      return { ...state, ...actions.data };
    default:
      return state;
  }
};
