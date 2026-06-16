import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Login from './landing_page/login/Login';
import Signup from './landing_page/signup/Signup';

const WithNavbar = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Pages WITHOUT Navbar/Footer */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Pages WITH Navbar/Footer */}
      <Route path="/" element={<WithNavbar><HomePage /></WithNavbar>} />
      <Route path="/about" element={<WithNavbar><AboutPage /></WithNavbar>} />
      <Route path="/product" element={<WithNavbar><ProductPage /></WithNavbar>} />
      <Route path="/pricing" element={<WithNavbar><PricingPage /></WithNavbar>} />
      <Route path="/support" element={<WithNavbar><SupportPage /></WithNavbar>} />
      <Route path="*" element={<WithNavbar><NotFound /></WithNavbar>} />
    </Routes>
  </BrowserRouter>
);