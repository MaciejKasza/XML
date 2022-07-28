import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export function useStore() {
  return useContext(StoreContext);
}

export function StoreProvider({ children }) {
  const [steps, setSteps] = useState(["active", null, null, null]);
  const [curretStep, setCurrentStep] = useState(0);

  const nextStep = () => {};

  const prevStep = () => {};

  const value = { steps, nextStep, prevStep };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
