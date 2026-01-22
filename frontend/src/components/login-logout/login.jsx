import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../pages/Cart/cartContext";
import "./log.css";
import { WishlistContext } from "../../pages/Wishlist/wishlistContext";
import { AccountContext } from "../../pages/Account/accountContext";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const { loadCart, setToken } = useContext(CartContext);
  const { loadCart, setToken: setCartToken } = useContext(CartContext);
  const { setToken: setWishlistToken, refreshWishlist } = useContext(WishlistContext);
  const { setUser } = useContext(AccountContext);


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        console.log("Login successful: ", data);
        
        setCartToken(data.token);
        setWishlistToken(data.token);

        loadCart();
        refreshWishlist();

        setUser(data.user);

        navigate("/");
      } else {
        console.error("Login failed: ", data.error);
      }
    } catch (err) {
      console.error("Login error: ", err);
    }
  };

  return (
    <div className="formPage">
        <h1> Login now </h1>
      <form onSubmit={handleLogin}>
        <input
            className="formInput"
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
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/register"> Sign up here </Link>
        </p>
      </form>
    </div>
  );
};
