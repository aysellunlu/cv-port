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
import AboutUs from "./Pages/AboutUs";
import SSSPage from "./Pages/SSSPage";
import HRBlogs from "./Pages/HRBlogs";
import HRBlogDetails from "./Pages/HRBlogDetails";
import CreateUserProfile from "./Pages/CreateUserProfile";
import CreateCompanyProfile from "./Pages/CreateCompanyProfile";
import UserProfile from "./Pages/UserProfile";
import CompanyProfile from "./Pages/CompanyProfile";
import BusinessPartners from "./Pages/BusinessPartners";

const App = () => {
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
          <Route path="/hakkimizda" element={<AboutUs />} />
          <Route path="/sikca-sorulan-sorular" element={<SSSPage />} />
          <Route path="/insan-kaynaklari-blog" element={<HRBlogs />} />
          <Route path="/insan-kaynaklari-blog-detay:id" element={<HRBlogDetails />} />
          <Route path="/kullanici-profili-olustur" element={<CreateUserProfile />} />
          <Route path="/firma-profili-olustur" element={<CreateCompanyProfile />} />
          <Route path="/kullanici-profili" element={<UserProfile />} />
          <Route path="/firma-profili" element={<CompanyProfile />} />
          <Route path="/is-ortaklarimiz" element={<BusinessPartners />} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
};

export default App;
