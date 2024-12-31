import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Categories from './Pages/Categories';
import CategoryProduct from './Pages/CategoryProduct';
import AllProducts from './Pages/AllProducts/AllProducts';
import NavBar from './Component/NavBar';
import ProductsDetail from './Pages/ProductDetail/ProductsDetail';
import CreatePage from './Pages/CreateProductPage/CreatePage';
import Hero from './Component/Hero';

const App = () => {
  const location = useLocation(); 

  return (
    <div>
      <NavBar />
      {location.pathname === '/' && <Hero />}
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categoryProduct/:prodID" element={<CategoryProduct />} />
        <Route path="/product/:detailID" element={<ProductsDetail />} />
        <Route path="/createPage" element={<CreatePage />} />
      </Routes>
    </div>
  );
};

export default App;
