import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import { Login } from './components/login-logout/login.jsx';
import { PrivateRoute } from './components/privateRoute.jsx';
import { Register } from './components/login-logout/register.jsx';


function Layout() {
  const location = useLocation();
  const hideHeaderFooter = 
  location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/about' element={< About />} />
          <Route path='/listing' element={< Listing />} />
          <Route path='*' element={< NotFound />} />
          <Route path="/details/:id" element={<DetailsProduct />} />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <CartPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      {!hideHeaderFooter && <Footer />}

      <div className='toast-container position-fixed bottom-0 end-0 p-3'>
        <div 
          id='cartToast'
          className='toast align-items-center toastNotif'
          role='alert'
          aria-live='assertive'
          aria-atomic='true'
        >
          <div className='d-flex'>
            <div className='toast-body'>Item added to cart!</div>
            <button
              type='button'
              className='btn-close me-2 m-auto'
              data-bs-dismiss='toast'
              aria-label='Close'
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
    <CartProvider>
      <Router>
        <Layout />
      </Router>
    </CartProvider>
    </>
  )
}

export default App
