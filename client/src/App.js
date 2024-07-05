// Style Import for overall application styling
import './App.css';

// Router Imports for handling navigation within the app
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Firebase Imports for authentication and backend integration
import { getAuth } from "firebase/auth";
import { app } from './Firebase/Firebase';

// Feature Components for user authentication and navigation
import Login from './login/login';
import SignUp from './signup/signup';
import Header from './components/header';
import Footer from './components/footer';

// Page Component Imports for different views
import Home from "./pages/Home";
import PortFolio from "./pages/Portfolio";
import NoPage from "./pages/NoPage";
import AdminPage from './pages/Admin';
import Product from './pages/Product';
import ExploreProducts from './pages/Explore';

import ProtectedRoute from './components/ProtectedRoute';

function App() {

  

  // Initialize Firebase Authentication and get a reference to the service
  getAuth(app);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="admin" element={<ProtectedRoute> <AdminPage /></ProtectedRoute>}/>
        <Route path="signup" element={<SignUp />} />
        <Route path="PortFolio" element={<PortFolio />} />
        <Route path="*" element={<NoPage />} />
        <Route path="product" element={<Product />} />
        <Route path="explore" element={<ExploreProducts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
