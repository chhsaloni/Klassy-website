import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import AdminPage from "./Pages/AdminPage";
// import Contactus from "./Components/Contactus";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login" element={<AdminPage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
