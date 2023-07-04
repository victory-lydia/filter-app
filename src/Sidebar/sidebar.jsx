import React from "react";
import "../Sidebar/sidebar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Category from "./Category/Category";
import Brand from "./Brand/Brand";

function Sidebar({ handleChange }) {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>
          <AiOutlineShoppingCart />
        </h1>
      </div>

      <Category handleChange={handleChange} />
      <Brand handleChange={handleChange} />
    </section>
  );
}

export default Sidebar;
