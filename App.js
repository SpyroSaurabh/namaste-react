import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/hamburger-with-meat-cheese_1308-30898.jpg?size=626&ext=jpg&ga=GA1.2.1743561634.1635348052&semt=ais"
        />
        <span>FOODYY</span>
      </div>
      <div className="nav-container">
        <ul className="nav">
          <li className="nav-links">Home</li>
          <li className="nav-links">About Us</li>
          <li className="nav-links">Contact Us</li>
          <li className="nav-links">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card-container">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kalceqrjh7vy9cdnvqfp"
        alt="Card Image"
      />
      <div className="card-content">
        <h2 className="card-heading">Meghana Foods</h2>
        <h5>Cuisine, sweet dish</h5>
        <div className="card-rating">
          <span className="rating-number">4.5</span>
          <span className="rating-star">⭐</span>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <h3>Search</h3>
      </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
