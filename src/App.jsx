import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import { Header } from './components/header/header.jsx'
import { Footer } from './components/footer/footer.jsx';

import { Home } from './pages/Home/home.jsx';
import { About } from './pages/About/about.jsx';
import { Listing } from './pages/Listing/listing.jsx';
import { NotFound } from './pages/NotFound/notFound.jsx';
import { DetailsProduct } from './pages/Details/detailsProduct.jsx'; 
import { CartPage } from './pages/Cart/cartPage.jsx';
import { CartProvider } from './pages/Cart/cartContext.jsx';



function App() {
  return (
    <>
    <CartProvider>
      <Router>
        < Header />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/about' element={< About />} />
          <Route path='/listing' element={< Listing />} />
          <Route path='*' element={< NotFound />} />
          <Route path="/details" element={<DetailsProduct />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        < Footer />
      </Router>
    </CartProvider>
    </>
  )
}

export default App
