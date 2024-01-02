import "./index.css";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <div className="mobile_menu">
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <div className="menu_item">
          <i style={{ fontSize: "30px" }} className="fa fa-home"></i>
          <h3 style={{ fontSize: "13px" }}>Home</h3>
        </div>
      </NavLink>
      <NavLink to="/records" style={{ textDecoration: "none" }}>
        <div className="menu_item">
          <i style={{ fontSize: "30px" }} className="fa fa-database"></i>
          <h3 style={{ fontSize: "13px" }}>Records</h3>
          <span>35</span>
        </div>
      </NavLink>
      <div className="menu_item">
        <i className="fas fa-comment-alt"></i>
        <span>28</span>
        <h3>Chats</h3>
      </div>
      <div className="menu_item">
        <i className="fas fa-first-aid"></i>
        <h3>DIY Remedies</h3>
        <span>99+</span>
      </div>
    </div>
  );
};

export default index;
