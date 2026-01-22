import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import "../header/header.css";
import "../header/headerSearch.css";
import SearchIcon from "@mui/icons-material/Search";


export const HeaderSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const navigate = useNavigate();



    // live search effect
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (searchTerm.trim() !== "") {
                fetchResults(searchTerm);
            } else {
                setResults([]);
            }
        }, 300)
        return () => clearTimeout(delayDebounce);
    }, [searchTerm]);

    const fetchResults = async (term) => {
        try {
            const res = await fetch(`http://localhost:5000/api/products?search=${term}`);
            const data = await res.json();
            setResults(data);
        } catch (err) {
            console.error("Search error: ", err);
        }
    };

    const goToDetails = (id) => {
        navigate(`/details/${id}`);
        setResults([]);
        setSearchTerm("");
    };

  return (
    <div className='headerSearch'>
        <form className='d-flex' role='search'>
            <div className='searchBox'>
            <input 
                className='form-control me-2'
                type='search'
                placeholder='Search for items'
                aria-label='Search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon  className='searchIcon' />
            </div>
            {/* <button className='searchBtn' type='submit'>
                
            </button> */}
        </form>

        {results.length > 0 && (
            <div className='searchResults'>
                {results.map((product) => (
                    <div onClick={() => goToDetails(product._id)} className='headerSearchItem'>
                        <img src={`http://localhost:5000/images/${product.image}`} alt={product.name} className='searchImg' />
                        <span> {product.name} </span>
                    </div>
                ))}
            </div>
        )}
    </div>
  );
};
