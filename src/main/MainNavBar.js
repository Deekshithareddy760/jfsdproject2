import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./AboutUs";
import ContactUs from "./ContactUs";
import "./style.css";
import FarmerLogin from '../farmer/farmerlogin'
import ExpertLogin from '../agriexpert/expertlogin';
import AboutUs from "./AboutUs";
import Signup from "./Signup";

export default function MainNavBar({ onExpertLogin, onFarmerLogin }) {

  return (
    <div>
      <nav>
        <ul>
          <div style={{ float: "left" }}>
            <li>
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
          </div>

          <li className="dropdown">
            <Link>Login</Link>
            <div className="dropdown-content">
              <Link to="/farmerlogin">Farmer Login</Link>
              <Link to="/expertlogin">Expert Login</Link>
            </div>
          </li>
          
          <div style={{ float: "right" }}>
            <li>
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li>
                    <Link to="/signup">Signup</Link> {/* Add Signup link */}
                </li>
          </div>
        </ul>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} exact />
        <Route path="/about" element={<AboutUs/>} exact />
        <Route path="/contactus" element={<ContactUs />} exact />
        <Route path="/signup" element={<Signup />} /> {/* Signup route */}
        <Route path="/expertlogin" element={<ExpertLogin onExpertLogin={onExpertLogin} />} exact />
        <Route path="/farmerlogin" element={<FarmerLogin onFarmerLogin={onFarmerLogin} />} exact />
      </Routes>
    </div>
  );
}
