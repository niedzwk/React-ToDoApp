import React, { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [tasks, setTasks] = useState([]);

  //function for sorting tasks by date
  function compare( a, b ) {
    if ( a.date < b.date ){
      return -1;
    }
    if ( a.date > b.date ){
      return 1;
    }
    return 0;
  }

  const fetchData = async () => {
    const data = JSON.parse(localStorage.getItem("task"));
    setTasks(data);
    // data.sort(compare);
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{ isActive, setIsActive, tasks, setTasks }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
