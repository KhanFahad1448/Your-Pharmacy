// src/Context/LabTestsContext.jsx
import { createContext, useState } from "react";

export const LabTestsContext = createContext();

export const LabTestsProvider = ({ children }) => {
  const [bookedTests, setBookedTests] = useState([]);

  const bookTest = (test) => {
    // Avoid duplicates
    if (!bookedTests.find((t) => t.id === test.id)) {
      setBookedTests([...bookedTests, test]);
    }
  };

  const removeTest = (id) => {
    setBookedTests(bookedTests.filter((t) => t.id !== id));
  };

  return (
    <LabTestsContext.Provider value={{ bookedTests, bookTest, removeTest }}>
      {children}
    </LabTestsContext.Provider>
  );
};
