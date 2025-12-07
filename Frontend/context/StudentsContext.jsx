// StudentsContext.jsx
import { createContext, useState } from "react";

export const StudentsContext = createContext();

const StudentProvider = ({ children }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [reportData, setReportData] = useState(null);

  return (
    <StudentsContext.Provider
      value={{ selectedStudent, setSelectedStudent, reportData, setReportData }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentProvider;   // ✅ default export
