import React from "react";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CheckNotebooks from "./Pages/CheckNotebooks";
import Reports from "./Pages/Reports";
import StudentProvider from "../context/StudentsContext"

const App = () => {
  return (
    <StudentProvider>
      <BrowserRouter>
        <NavBar />
        <div className="flex">
          <SideBar />

          <div className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/check-notebook" element={<CheckNotebooks />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </StudentProvider>
  );
};

export default App;
