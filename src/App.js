import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { app } from './firebase/Firebase';


import About from "./pages/about/About.js";
import Home from "./pages/home/Home.js";
import Layout from "./components/Layout.js";
import Signup from "./pages/sign_up/Signup.js";
import Signin from "./pages/sign_in/Signin";
import Contact from './pages/contact/Contact.js';

if (!app) {
  initializeApp(app);
}

getAuth(app);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />

        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


