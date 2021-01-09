import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StoreContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
