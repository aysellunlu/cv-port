import "./App.css";
import Header from "./Layout/Header";
import React from "react";
import MainPage from "./Pages/MainPage";
import Footer from "./Layout/Footer";
import CompanyLogin from "./Pages/CompanyLogin";
import UserLogin from "./Pages/UserLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeDealer from "./Pages/BeDealer";
import JobPostingPackage from "./Pages/JobPostingPackage";

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/anasayfa" element={<MainPage />} />
          <Route path="/kullanici-girisi" element={<UserLogin />} />
          <Route path="/firma-girisi" element={<CompanyLogin />} />
          <Route path="/bayi-ol" element={<BeDealer />} />
          <Route path="/ilan-ver" element={<JobPostingPackage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
