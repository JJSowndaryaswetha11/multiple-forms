import React, { useState, createContext } from "react";

export const multistepContext = createContext();

export const StepContext = ({ children }) => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState({}); // Initialize as an empty object
  const [finalData, setFinalData] = useState([]);

  const contextValues = {
    currentStep,
    setStep,
    userData,
    setUserData,
    finalData,
    setFinalData,
    submitData
  };

  function submitData() {
    setFinalData([...finalData, userData]); // Add the current userData to finalData array
    setUserData({}); // Reset userData to an empty object
    setStep(1);
  }

  return (
    <multistepContext.Provider value={contextValues}>
      {children}
    </multistepContext.Provider>
  );
};
