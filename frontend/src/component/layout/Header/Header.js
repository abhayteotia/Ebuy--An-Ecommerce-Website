// import React from "react";
// import { ReactNavbar } from "overlay-navbar";
// import logo from "../../../images/logo.png";

// const options = {
//   burgerColorHover: "#eb4034",
//   logo,
//   logoWidth: "20vmax",
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Home",
//   link2Text: "Products",
//   link3Text: "Contact",
//   link4Text: "About",
//   link1Url: "/",
//   link2Url: "/products",
//   link3Url: "/contact",
//   link4Url: "/about",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIconUrl: "/login",
//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
// };

// const Header = () => {
//   return <ReactNavbar {...options} />;
// };
 

// export default Header;

import React from 'react'
import "./newHeader.css" ; 
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
         <div className= "header">
          <div className="homeSection">
            <Link to="/">
                <p>Home</p>
            </Link>
            </div>
            <div className="productsSection">
            <Link to="/products">
                <p>Products</p>
            </Link>
            </div>
            <div className="contactSection">
            <Link to="/contact">
                <p>Contact</p>
            </Link>
            </div>
            <div className="aboutSection">
            <Link to="/about">
                <p>About</p>
            </Link>
            </div>
            <div className="cartSection">
            <Link to="/cart">
              <ShoppingCartIcon   /> 
            </Link>
            </div>
            <div className="searchSection">
            <Link to="/search">
              <SearchIcon />
            </Link>
            </div>
         </div>
    )
}

export default Header