import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar_temp.jsx';
import LoginPage from './features/auth/LoginPage';
import HomePage from './features/products/HomePage';
import CartPage from './features/cart/CartPage';

export default function App(){
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </>
  );
}
