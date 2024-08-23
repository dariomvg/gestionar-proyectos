export const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("projects"));
  return data;
};

export const setLocalStorage = (data) => {
  localStorage.setItem("projects", JSON.stringify(data));
};
