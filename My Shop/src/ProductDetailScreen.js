// ProductDetailScreen.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './FashionStore.css';
import Sidebar from './Sidebar';
import './ProductDetailScreen.css'; 
import menuIcon from './assets/Menu.png'; 
import searchIcon from './assets/Search.png';
import bagIcon from './assets/shopping bag.png';
import bleachIcon from './assets/Do Not Bleach.png';
import disturbIcon from './assets/Do Not Tumble Dry.png';
import washIcon from './assets/Do Not Wash.png';
import ironIcon from './assets/Iron Low Temperature.png';
import deliveryIcon from './assets/Shipping.png';
import favIcon from './assets/Heart.png';
import addIcon from './assets/Plus.png';


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

const ProductDetailScreen = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const addToBasket = () => {
        const currentBasket = JSON.parse(localStorage.getItem('basket')) || [];
        const isProductInBasket = currentBasket.some(item => item.id === product.id);

        if (isProductInBasket) {
            alert(`${product.name} is already in your basket!`);
        } else {
            const updatedBasket = [...currentBasket, product];
            localStorage.setItem('basket', JSON.stringify(updatedBasket));
            alert(`${product.name} has been added to your basket!`);
        }
    };
    
    const { id } = useParams();
    const product = items.find(item => item.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

   

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
            <div className="product-detail">
            <img src={product.image} alt={product.name} className="product-detail-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span className="price">${product.price}</span>
            <h2>MATERIALS</h2>
            <p>
            We work with monitoring programmes to 
            ensure compliance with safety, health and 
            quality standards for our products.
            </p>

                
                    <p><img src={bleachIcon} alt="bleach" /> <span className='text'>Do not use bleach</span></p> 
                    <p><img src={disturbIcon} alt="disturb" /> <span className='text'>Do not tumble dry</span></p> 
                    <p><img src={washIcon} alt="wash" /> <span className='text'>Dry clean with tetrachloroethylene</span></p> 
                    <p><img src={ironIcon} alt="iron" /> <span className='text'>Iron at a maximum of 110ºC/230ºF</span></p> 
                    <br/>

                    <p><img src={deliveryIcon} alt="delivery" /> <span className='text'>Free Flat Rate Shipping</span></p>
                    <span className='text'>Estimated to be delivered on
                    <br/>
                    09/11/2021 - 12/11/2021.
                        </span> 
               
            </div>

            <div className="fixed-bottom-container">
            <a href="#shop"><img src={addIcon} alt="iron" className="left-icon" /></a>
            
            <a className='link-no-decoration' onClick={addToBasket}> <span className="text">Add to basket</span></a>
            <a href="#shop"> <img src={favIcon} alt="iron" className="right-icon" /></a>
           
            </div>

           
        </div>
    );
};

export default ProductDetailScreen;
