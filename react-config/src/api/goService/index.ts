import instance from "../axios";

const queryEmployeesTableUserList = async () => {
  try {
    const res = instance.get("/sql");
    return (await res).data;
  } catch (e) {
    return e;
  }
};
/**
 * 实现进度显示 开始计算
 */
const startCalculation = async () => {
  try {
    const res = instance.get("/start");
    return (await res).data;
  } catch (e) {
    return e;
  }
};
/**
 * 查找进度
 * @returns
 */
const checkProgress = async () => {
  try {
    const res = instance.get("/progress");
    return (await res).data;
  } catch (e) {
    return e;
  }
};
export { queryEmployeesTableUserList, startCalculation, checkProgress };
