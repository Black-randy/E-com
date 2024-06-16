import React from 'react';
import './App.css';
import Login from './components/login/Login';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {app} from './firebase/Firebase';

// Initialize Firebase App if not already initialized
if (!app) {
  initializeApp(app);
}

// Initialize Firebase Authentication and get a reference to the service
getAuth(app);

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;

