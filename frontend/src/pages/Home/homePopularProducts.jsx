import React, { useState } from 'react'
import './homePopularProducts.css'
import { HomePopularProductCard } from './homePopularProductCard'


export const HomePopularProducts = () => {

  return (
    <div className='mb-5'>
    <div className="container mb-5 p-3 popularProductsHeading">
        <div className="row">
            <div className="col-lg-3 col-sm-12">
                <h2>Popular Products</h2>
            </div>
        </div>
    </div>
    <HomePopularProductCard />
    </div>
  )
}
