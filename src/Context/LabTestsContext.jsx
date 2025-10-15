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
      {/* ✅ Responsive wrapper for all content rendered under this context */}
      <div
        className="
          text-[clamp(0.85rem,2.5vw,1rem)]
          sm:text-[0.9rem]
          md:text-[1rem]
          lg:text-[1.05rem]
          leading-relaxed
          w-full
          px-2 sm:px-4 md:px-6
          transition-all duration-300
        "
      >
        {children}
      </div>
    </LabTestsContext.Provider>
  );
};
