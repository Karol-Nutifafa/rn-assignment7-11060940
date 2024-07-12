import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FashionStore.css';
import Sidebar from './Sidebar';
import menuIcon from './assets/Menu.png'; 
import searchIcon from './assets/Search.png';
import bagIcon from './assets/shopping bag.png';



import officeWear from './images/office_wear.png';
import black from './images/black.png';
import churchWear from './images/church_wear.png';
import lamerei from './images/lamerei.png';
import wn21 from './images/21wn.png';
import lopo from './images/lopo.png';
import wn21White from './images/21wn_white.png';
import lame from './images/lame.png';

const items = [
    { id: 1, name: 'Office Wear', price: 120, image: officeWear, description: 'reversible angora cardigan' },
    { id: 2, name: 'Black', price: 120, image: black, description: 'reversible angora cardigan' },
    { id: 3, name: 'Church Wear', price: 120, image: churchWear, description: 'reversible angora cardigan' },
    { id: 4, name: 'Lamerei', price: 120, image: lamerei, description: 'reversible angora cardigan' },
    { id: 5, name: '21WN', price: 120, image: wn21, description: 'reversible angora cardigan' },
    { id: 6, name: 'Lopo', price: 120, image: lopo, description: 'reversible angora cardigan' },
    { id: 7, name: '21WN', price: 120, image: wn21White, description: 'reversible angora cardigan' },
    { id: 8, name: 'Lame', price: 120, image: lame, description: 'reversible angora cardigan' },
];

const FashionStore = () => {
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
            <section className="our-story" id="story">
                <h2>Our Story</h2>
                <div className="items-grid">
                    {items.map(item => (
                        <div key={item.id} className="item">
                             <Link to={`/product/${item.id}`} className="link-no-decoration">
                             <img src={item.image} alt={item.name} className="item-image" />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <span className="price">${item.price}</span>
                            </Link>
                          
                           
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FashionStore;
