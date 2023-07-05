import React from "react";
import "../Recommended/Recommended.css";
import Button from "../Components/Button";

function Recommended({ data, setProducts }) {
  const handleChange = (event, property) => {
    const value = event.target.value;
    console.log({ value, property });

    const filteredProducts = data.products?.filter(
      (product) =>
        product[property]?.toLowerCase().indexOf(value?.toLowerCase()) !== -1
    );

    setProducts(filteredProducts);
  };

  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleChange} value="" title="All Products" />
          <Button
            onClickHandler={(e) => handleChange(e, "brand")}
            value="Apple"
            title="Apple"
          />
          <Button
            onClickHandler={(e) => handleChange(e, "brand")}
            value="samsung"
            title="Samsung"
          />
          <Button
            onClickHandler={(e) => handleChange(e, "category")}
            value="fragrances"
            title="Fragrances"
          />
          <Button
            onClickHandler={(e) => handleChange(e, "category")}
            value="skincare"
            title="Skincare"
          />
          {/* <Button onClickHandler={handleChange} value="flour" title="Flour" /> */}
          <Button
            onClickHandler={(e) => handleChange(e, "category")}
            value="groceries"
            title="Groceries"
          />
          <Button
            onClickHandler={(e) => handleChange(e, "category")}
            value="home-decoration"
            title="Home-Decoration"
          />
        </div>
      </div>
    </>
  );
}

export default Recommended;
