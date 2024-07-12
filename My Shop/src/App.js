import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FashionStore from './FashionStore';
import ProductDetailScreen from './ProductDetailScreen';
import Cart from './Cart';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FashionStore />} />
                <Route path="/product/:id" element={<ProductDetailScreen />} />
                <Route path="/cart/" element={<Cart />} />
            </Routes>
        </Router>
    );
};

export default App;
