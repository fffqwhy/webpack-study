import instance from "../axios";

const queryEmployeesTableUserList = async () => {
  try {
    const res = instance.get("/sql");
    return (await res).data;
  } catch (e) {
    return e;
  }
};


export {
    queryEmployeesTableUserList
}