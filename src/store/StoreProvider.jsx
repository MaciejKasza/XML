import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export function useStore() {
  return useContext(StoreContext);
}

export function StoreProvider({ children }) {
  const value = {};

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
