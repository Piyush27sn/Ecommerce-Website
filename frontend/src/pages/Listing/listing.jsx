import React from 'react'
import './listing.css'
import { Breadcrumb } from '../../components/breadcrumb/breadcrumb'
import { Sidebar } from '../../components/sidebar/sidebar';
import { HomeSliderProducts } from '../Home/homeSliderProducts';
import { ListingProducts } from './listingProducts';
import { SortButton } from './sortButton';


const homeShopSnack = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "#" },
  { label: "Snack" }
];

export const Listing = () => {
    
  return (
    <>
    <div className='listingHeading'>
        <h1>Listing</h1>
        < Breadcrumb items={homeShopSnack} />
    </div>

    <div className="listingData mb-5">
        <div className="container-fluid me-1 ms-1 www">
            <div className="row">
                <div className="col-lg-3 col-md-4">
                    <Sidebar />
                </div>
                <div className="col-lg-9 col-md-8">
                  <div className='d-flex justify-content-end me-2'><SortButton /></div>
                  <ListingProducts HomeSliderProducts={HomeSliderProducts} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
