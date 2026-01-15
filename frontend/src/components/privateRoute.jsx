import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        // redirect to login if not logged in
        return <Navigate to="/login" replace />
    }

    return children;
}
