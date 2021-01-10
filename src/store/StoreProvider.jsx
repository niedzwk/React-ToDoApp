import React, { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const data = JSON.parse(localStorage.getItem("task"));
    setTasks(data);
    console.log("fdfsd");
  };

  //   const ob = [
  //     {
  //       one: 1,
  //       two: 2,
  //     },
  //     {
  //       one: 1,
  //       two: 2,
  //     },
  //   ];

  useEffect(() => {
    // localStorage.setItem("task", JSON.stringify(ob));
    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{ isActive, setIsActive, tasks, setTasks }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
