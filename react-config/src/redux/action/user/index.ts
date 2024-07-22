import { UPDATE_USER_INFO } from "./actionType";

export const setUserInfo = (data: any) => {
  return {
    type: UPDATE_USER_INFO,
    data: data,
  };
};

// 异步action，使用redux-thunk
export const fetchData = () => {
  return async (dispatch: any) => {
    try {
      const res = await new Promise((reslove) => {
        setTimeout(() => {
          reslove(true);
        }, 1000);
      });
      if (res === true) {
        dispatch(
          setUserInfo({
            userName: "thunkqyfu" + new Date().getSeconds(),
            loginTime: new Date(),
          })
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // 你可以在这里分发一个失败的 action，比如
      // dispatch({ type: 'FETCH_DATA_FAILURE', error });
    }
  };
};
