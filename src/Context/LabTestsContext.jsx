import React, { createContext, useState } from "react";

export const LabTestsContext = createContext();

export const LabTestsProvider = ({ children }) => {
  const [bookedTests, setBookedTests] = useState([]);

  const bookTest = (test) => {
    const exists = bookedTests.some((t) => t.id === test.id);
    if (!exists) setBookedTests((prev) => [...prev, test]);
  };

  const removeTest = (id) => {
    setBookedTests((prev) => prev.filter((test) => test.id !== id));
  };

  return (
    <LabTestsContext.Provider value={{ bookedTests, bookTest, removeTest }}>
      {children}
    </LabTestsContext.Provider>
  );
};
