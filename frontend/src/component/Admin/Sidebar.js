import React from "react";
import "./Sidebar.css";
 
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
    return (
      <div className="sidebar">
         <div className="welcomeadmin">This is Admin Dashboard</div>
         <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
        <Link to="/admin/products">
          <p>
          <PostAddIcon />
            All Products
          </p>
        </Link>
        <Link to="/admin/product">
          <p>
          <AddIcon />
            Create Product
          </p>
        </Link> 
        <Link to="/admin/orders">
          <p>
            <ListAltIcon />
            Orders
          </p>
        </Link>
        <Link to="/admin/users">
          <p>
            <PeopleIcon /> Users
          </p>
        </Link>
        <Link to="/admin/reviews">
          <p>
            <RateReviewIcon />
            Reviews
          </p>
        </Link>
      </div>
    );
  };
  
  export default Sidebar;