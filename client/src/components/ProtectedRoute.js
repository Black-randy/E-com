import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const auth = getAuth();
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);  // Convert truthy or falsy values to boolean
            setIsLoading(false);
        });
        return () => unsubscribe(); // Cleanup subscription on unmount
    }, [auth]);

    if (isLoading) {
        return <div>Loading...</div>; // Or any loading spinner
    }

    return isAuthenticated ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
