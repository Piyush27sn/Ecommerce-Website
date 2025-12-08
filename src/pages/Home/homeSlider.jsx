import React, { useState } from 'react'
import { HomeSliderProductCard } from './homeSliderProductCard'
import { HomeSliderProducts } from './homeSliderProducts'

import one from '../../assets/images/HomeSLiderProducts/homesliderad1.jpg'
import two from '../../assets/images/HomeSLiderProducts/homesliderad2.jpg'
import three from '../../assets/images/HomeSLiderProducts/homesliderad3.jpg'

export const HomeSlider = () => {
    
const [categorySelected, setCategorySelected] = useState('All')
const filteredProducts = categorySelected === 'All' ? HomeSliderProducts : HomeSliderProducts.filter(product => product.category === categorySelected)

  return (
    <div>

        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <h2>Featured Categories</h2>
                </div>
                <div className="col-lg-8 col-sm-12 homeCatBtn d-flex flex-wrap gap-2">
                    <button onClick={() => setCategorySelected('All')} className={categorySelected === 'All' ? 'homeCatBtnActive' : ''}>All Categories</button>
                    <button onClick={() => setCategorySelected('Cake & Milk')} className={categorySelected === 'Cake & Milk' ? 'homeCatBtnActive' : ''}>Cake & Milk</button>
                    <button onClick={() => setCategorySelected('Coffee & Tea')} className={categorySelected === 'Coffee & Tea' ? 'homeCatBtnActive' : ''}>Coffee & Tea</button>
                    <button onClick={() => setCategorySelected('Pet Food')} className={categorySelected === 'Pet Food' ? 'homeCatBtnActive' : ''}>Pet Food</button>
                    <button onClick={() => setCategorySelected('Vegetables & Fruits')} className={categorySelected === 'Vegetables & Fruits' ? 'homeCatBtnActive' : ''}>Vegetables & Fruits</button>
                </div>
            </div>
        </div>

        <div className='d-flex'>
        <HomeSliderProductCard HomeSliderProducts={filteredProducts} />
        </div>

        <div className="container mt-4 mb-5 homeSliderAd">
            <div className="row">
                <div className="col-lg-4 col-sm-12 pb-1 productAd">
                    <img src={one} className='img-fluid'/>
                    <button className='productAdBtn'>Shop now</button>
                </div>
                <div className="col-lg-4 col-sm-12 pb-1 productAd">
                    <img src={two} className='img-fluid'/>
                    <button className='productAdBtn'>Shop now</button>
                </div>
                <div className="col-lg-4 col-sm-12 pb-1 productAd">
                    <img src={three} className='img-fluid'/>
                    <button className='productAdBtn'>Shop now</button>
                </div>
            </div>
        </div>
    </div>
  )
}
