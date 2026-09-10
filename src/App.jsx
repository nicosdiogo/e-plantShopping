
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import addItem from './CartItem.jsx'; // Import the addItem action from CartItem.jsx

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  const [addedToCart, setAddedToCart] = useState({});


    const handleAddToCart = (product) => {
  dispatch(addItem(product)); // Dispatch the action to add the product to the cart (Redux action)

  setAddedToCart((prevState) => ({ // Update the local state to reflect that the product has been added
    ...prevState, // Spread the previous state to retain existing entries
    [product.name]: true, // Set the current product's name as a key with value 'true' to mark it as added
  }));
};

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
         <div className="landing_content">
         <h1>Welcome To Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>
         
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
         </div>
          <div className="aboutus_container">
          <AboutUs/>
          </div>
          </div>

      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick}/>
      </div>
    </div>
  );
}

export default App;



