import { useCallback } from "react";

const useStorage = () => {
  const generateId = () => {
    const currTime = new Date();
    const id = currTime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    return id;
  };

  const setItem = (id, items) => {
    localStorage.setItem(id, JSON.stringify(items));
  };

  const getItem = useCallback((key) => {
    const data = JSON.parse(localStorage.getItem(key));
    // console.log(data);
    return data;
  }, []);

  return { setItem, getItem, generateId };
};

export default useStorage;
