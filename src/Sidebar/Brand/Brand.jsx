import React from "react";
import "../Brand/Brand.css";
import Input from "../../Components/Input";

function Brand({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title brand-title">Brand</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} value="" name="test2" type="radio" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="apple"
        title="Apple"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value="samsung"
        title="Samsung"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value="fog scent xpressio"
        title="Fog Scent Xpressio"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value="dry rose"
        title="Dry Rose"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value="golden"
        title="Golden"
        name="test2"
      />
    </div>
  );
}

export default Brand;
