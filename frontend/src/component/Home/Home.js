import React, { Fragment, useEffect} from "react";
 import "./Home.css";
 import Product from "./ProductCard.js";
 import MetaData from "../layout/MetaData";
 import { clearErrors, getProduct } from "../../actions/productAction";
 import {useSelector, useDispatch } from "react-redux";
 import Loader from "../layout/Loader/Loader";
 import { useAlert } from "react-alert";
//  import Sliding from "./Sliding.js";
 
  
const Home = () => {
  const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, products  } = useSelector(
      (state) => state.products
    );

    useEffect(() =>{
      if(error) {
        alert.error(error);
            dispatch(clearErrors());
      }
      dispatch(getProduct());
    }, [dispatch, error,alert]);
    return  (
     loading ? (<Loader />): <Fragment>
     <MetaData title="Ebuy" />
    <div className = "banner">
     <p>Welcome to Ebuy</p>
     <h1>FIND AMAZING PRODUCTS BELOW</h1>

     <a href = "#container"></a>
      
    </div>
  <h2 className="homeHeading">Featured Products</h2>
  <div className="container" id="container"> 
    {products && products.map((product) => <Product product = {product} />)}
  </div>
 </Fragment>
    );
}

export default Home;