import React from "react";
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb";
import "./details.css";
import { Sidebar } from "../../components/sidebar/sidebar";
import { DetailsProduct } from "./detailsProduct";
import { DetailsInfo } from "./detailsInfo";
import { DetailsReview } from "./detailsReview";

const DetailsBreadcrumb = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "#" },
  { label: "Snack" },
];

export const Details = () => {
  return (
    <div className="detailsPage mb-5">

      <div className="detailsBreadcrumb mt-3">
        <Breadcrumb items={DetailsBreadcrumb} />
      </div>

      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-lg-9 col-sm-12">
            <DetailsProduct />
          </div>
          <div className="col-lg-3 d-none d-md-block">
            <Sidebar />
          </div>
        </div>
      </div>

      <DetailsInfo />

      <DetailsReview />

    </div>
  );
};
