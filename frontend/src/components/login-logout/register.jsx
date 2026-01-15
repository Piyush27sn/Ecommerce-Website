import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../pages/Cart/cartContext';
import './log.css';


export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { setToken, loadCart } = useContext(CartContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (data.token) {
                // save token
                localStorage.setItem("token", data.token);

                // update context
                setToken(data.token);
                loadCart();

                // feedback + redirect
                navigate("/cart");
            } else {
                setError(data.error || "Registration failed");
            }
        } catch (err) {
            console.error("Registration error:", err);
        }
    }
  return (
    <div className='formPage'>
        <h1> Sign in </h1>
    <form onSubmit={handleRegister}>
        <input 
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input 
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit"> Sign Up </button>
        {error && <p style={{ color: "red" }}> {error} </p>}
        <p>
            Already have an account? <Link to="/login"> Login here </Link>
        </p>
    </form>
    </div>
  );
};
