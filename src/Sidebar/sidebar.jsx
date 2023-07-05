import React from "react";
import "../Sidebar/sidebar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Category from "./Category/Category";
import Brand from "./Brand/Brand";

function Sidebar({ data, setProducts }) {
  const handleChange = (event, property) => {
    const value = event.target.value;

    const filteredProducts = data.products?.filter(
      (product) =>
        product[property].toLowerCase().indexOf(value.toLowerCase()) !== -1
    );

    setProducts(filteredProducts);
  };

  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>
          <AiOutlineShoppingCart />
        </h1>
      </div>

      <Category handleChange={(e) => handleChange(e, "category")} />
      <Brand handleChange={(e) => handleChange(e, "brand")} />
    </section>
  );
}

export default Sidebar;
