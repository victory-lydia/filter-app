import React from "react";
import "../Category/Category.css";
import Input from "../../Components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} value="all" name="test" type="radio" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="smartphones"
          title="Smartphones"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="laptops"
          title="Laptops"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="fragrances"
          title="Fragrances"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="skincare"
          title="Skincare"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="groceries"
          title="Groceries"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="home-decoration"
          title="Home-Decoration"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
