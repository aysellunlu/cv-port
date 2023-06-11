import "./App.css";
import Header from "./Layout/Header";
import React from "react";
import MainPage from "./Pages/MainPage";
import Footer from "./Layout/Footer";
import CompanyLogin from "./Pages/CompanyLogin";
import UserLogin from "./Pages/UserLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/homepage" element={<MainPage />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/company-login" element={<CompanyLogin />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
