import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Akun from "./pages/Akun";
import Dashboard from "./pages/Dashboard";
import SaldoDonasi from "./pages/SaldoDonasi";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-row">
        <SideBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/saldodonasi" element={<SaldoDonasi />} />
          <Route path="/akun" element={<Akun />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
