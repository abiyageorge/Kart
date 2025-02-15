import logo from './logo.svg';
import { CartProvider } from './context/CartContext';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import AddProduct from './pages/AddProduct'; // Import AddProduct Page

function App() {
  return (
  <CartProvider>
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/> {/* Add Product Page */}
      </Routes>
      <Footer/>
    </div>
    </CartProvider>
  );
}

export default App;
