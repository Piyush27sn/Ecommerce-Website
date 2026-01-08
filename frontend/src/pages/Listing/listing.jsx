import React, { useEffect, useState } from 'react'
import './listing.css'
import { Breadcrumb } from '../../components/breadcrumb/breadcrumb'
import { Sidebar } from '../../components/sidebar/sidebar';
import { ListingProducts } from './listingProducts';
import { SortButton } from './sortButton';


const homeShopSnack = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "#" },
  { label: "Snack" }
];

export const Listing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([10, 60000]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    const filtered = products.filter(
      (p) => p.price >= newValue[0] && p.price <= newValue[1]
    );
    setFilteredProducts(filtered);
  };
    
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
                  <Sidebar value={priceRange} onPriceChange={handlePriceChange} />
                </div>
                <div className="col-lg-9 col-md-8">
                  <ListingProducts products={filteredProducts} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
