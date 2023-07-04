import React from "react";
import "../Recommended/Recommended.css";
import Button from "../Components/Button";

function Recommended({ handleClick }) {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button
            onClickHandler={handleClick}
            value="data"
            title="All Products"
          />
          <Button onClickHandler={handleClick} value="Apple" title="Apple" />
          <Button
            onClickHandler={handleClick}
            value="Samsung"
            title="Samsung"
          />
          <Button
            onClickHandler={handleClick}
            value="fragrances"
            title="Fragrances"
          />
          <Button
            onClickHandler={handleClick}
            value="skincare"
            title="Skincare"
          />
          {/* <Button onClickHandler={handleClick} value="flour" title="Flour" /> */}
          <Button
            onClickHandler={handleClick}
            value="groceries"
            title="Groceries"
          />
          <Button
            onClickHandler={handleClick}
            value="home-decoration"
            title="Home-Decoration"
          />
        </div>
      </div>
    </>
  );
}

export default Recommended;
