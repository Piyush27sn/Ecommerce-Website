import React, { useContext } from "react";
import { AccountContext } from "./accountContext";
import { Link } from 'react-router-dom';
import './accountPage.css';


export const AccountPage = () => {
  const { user } = useContext(AccountContext);
  return (
    <div className="container mt-4 mb-5 accountPage">
      <h1> Account: </h1>
      <div className="row">

        <div className="col-lg-4 col-sm-12">
          <div className="card accountCard">
          <h5>Account Details</h5>
          {user ? (
            <>
              <p><span className="accountBold">User Name: </span> {user.name} </p>
              <p><span className="accountBold">Email: </span> {user.email} </p>
            </>
          ) : (
            <span>Not logged in</span>
          )}
          </div>
        </div>

        <div className="col-lg-4 col-sm-12">
          <div className="card accountCard">
          <h5>Cart</h5>
          <p className="text-center">To view your cart - <Link to='/cart'>click here</Link></p>
        </div>
        </div>

        <div className="col-lg-4 col-sm-12">
          <div className="card accountCard">
          <h5>Wishlist</h5>
          <p className="text-center">To view your wishlist - <Link to='/wishlist'>click here</Link></p>
        </div>
        </div>
      </div>
    </div>
  );
};
