// Cart.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FashionStore.css';
import './cart.css';
import Sidebar from './Sidebar';
import './ProductDetailScreen.css'; 
import closeIcon from './assets/Close.png'; 
import menuIcon from './assets/Menu.png'; 
import searchIcon from './assets/Search.png';
import bagIcon from './assets/shopping bag.png';


const Cart = () => {
   
    const [basket, setBasket] = React.useState(JSON.parse(localStorage.getItem('basket')) || []);


    const removeItem = (itemId) => {
        const updatedBasket = basket.filter(item => item.id !== itemId);
        setBasket(updatedBasket);
        localStorage.setItem('basket', JSON.stringify(updatedBasket));
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="fashion-store">
              <header className="header">
            <nav>
                    <ul>
                      
                        <li><a href="#shop"><img src={menuIcon} alt="Menu" onClick={toggleSidebar} /></a></li> 
                    </ul>
                </nav>
                <h1>Open<br />Fashion</h1>

                <nav>
                    <ul>
                    <li><a href="#shop"><img src={searchIcon} alt="Search" /></a></li> 
                    <li><a ><Link to={`/cart`}><img src={bagIcon} alt="bag" /></Link></a></li> 
                 </ul>
                </nav>
            </header>
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            <br />
            <div className="cart">
            <h2>Your Basket</h2>
            {basket.length === 0 ? (
                <p>Your basket is empty.</p>
            ) : (
                basket.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} style={{ width: '100px' }} />
                        <div>
                            <p>{item.name}</p>
                            <p>${item.price} <a className='btn' onClick={() => removeItem(item.id)}>X</a></p>
                            
                          
                        </div>
                        <br/>
                      
                    </div>
                ))
            )}
        </div>
        </div>
    );
};

export default Cart;
