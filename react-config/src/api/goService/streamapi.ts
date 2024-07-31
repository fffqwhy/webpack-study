import instance from "../axios";

const fetchData = async () => {
  const response = await instance.get("/stream", {
    responseType: "stream",
  });

  const reader = response.data.getReader();
  return reader;

};
export { fetchData };
