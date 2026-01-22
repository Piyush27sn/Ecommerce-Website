import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";


export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const BASE_URL = "http://localhost:5000";

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;

        axios .get(`${BASE_URL}/api/auth/profile`, {
            headers: { Authorization: `Bearer ${token}`},
        })
        .then((res) => setUser(res.data))
        .catch((err) => {
            console.error("Error fetching user profile: ", err);
            setUser(null);
        });
    }, []);


    return (
        <AccountContext.Provider value={{ user, setUser }}>
            {children}
        </AccountContext.Provider>
    )
}
