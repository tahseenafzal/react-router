import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Product, ProductItem, NavBar } from "./components";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductItem />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
