import React, { useState } from 'react'
import './homePopularProducts.css'
import { HomePopularProductCard } from './homePopularProductCard'
import { HomeSliderProducts } from './homeSliderProducts'

export const HomePopularProducts = () => {

  const [categorySelectedP, setCategorySelectedP] = useState('All')
  const filteredProductsP = categorySelectedP === "All" ? HomeSliderProducts : HomeSliderProducts.filter(product => product.category === categorySelectedP)

  return (
    <div className='mb-5'>
    <div className="container mb-5 p-3 popularProductsHeading">
        <div className="row">
            <div className="col-lg-3 col-sm-12">
                <h2>Popular Products</h2>
            </div>
            <div className="col-lg-9 col-sm-12 d-flex justify-content-end">
                <button onClick={() => setCategorySelectedP('All')} className={categorySelectedP === 'All' ? 'popularSelectBtn' : ''} >All</button>
                <button onClick={() => setCategorySelectedP('Cake & Milk')} className={categorySelectedP === 'Cake & Milk' ? 'popularSelectBtn' : ''} >Milk & Dairies</button>
                <button onClick={() => setCategorySelectedP('Coffee & Tea')} className={categorySelectedP === 'Coffee & Tea' ? 'popularSelectBtn' : ''} >Coffees & Teas</button>
                <button onClick={() => setCategorySelectedP('Pet Food')} className={categorySelectedP === 'Pet Food' ? 'popularSelectBtn' : ''} >Pet Foods</button>
                <button onClick={() => setCategorySelectedP('Vegetables & Fruits')} className={categorySelectedP === 'Vegetables & Fruits' ? 'popularSelectBtn' : ''} >Vegetables & Fruits</button>
            </div>
        </div>
    </div>
    <HomePopularProductCard HomeSliderProducts={filteredProductsP} />
    </div>
  )
}
