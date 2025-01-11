import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './CustomComponents/NavBar';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp';
import Cart from './Pages/Cart';
import WishList from './Pages/WishList';
import LatestProducts from './CustomComponents/LatestProducts/LatestProducts';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        {/* <Route path="/latest/*" element={<LatestProducts />} /> */}
      </Routes>
    </div>
  );
};

export default App;
