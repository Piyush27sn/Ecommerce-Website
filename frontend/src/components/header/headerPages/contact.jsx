import React from "react";
import "./contact.css";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export const Contact = () => {
  return (
    <div className="container contactMain">
      <h1> Contact Us </h1>
      <p>
        We’d love to hear from you! Whether you have questions about your order,
        need help with a product, or just want to share feedback, our team is
        here to assist.
      </p>
      <h4> Company Information </h4>
      <ul>
        <li>
          <span> Business Name: </span> E-Commerce
        </li>
        <li>
          <span> Address: </span> 123 Market Street, 10129
        </li>
        <li>
          <span> Working Hours: </span> Monday - Saturday, 9:00 a.m. - 7:00 p.m.
          IST
        </li>
      </ul>
      <h4> Get in touch </h4>
      <ul>
      <li>
        <span> Customer support email: </span> support@ecommerce.com
      </li>
      <li>
        <span> Sales inquiries </span> sales@ecommerce.com
      </li>
      <li>
        <span> Phone: </span> +91 99999 00000
      </li>
      </ul>
      <h4> Connect with us </h4>
      <h6> Follow us on - <Instagram className="contactIcon" /> <Facebook className="contactIcon" /> <Twitter className="contactIcon" />  </h6>
    </div>
  );
};
