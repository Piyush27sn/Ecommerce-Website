import React from "react";
import { HomeCarousel } from "./homeCarousel";
import { HomeSlider } from "./homeSlider";
import { HomePopularProducts } from "./homePopularProducts";
import { HomeNewsletter } from "./homeNewsletter";



export const Home = () => {
  return (
    <>
    <HomeCarousel />
    <HomeSlider />
    <HomePopularProducts />
    <HomeNewsletter />
    </>
  );
};
