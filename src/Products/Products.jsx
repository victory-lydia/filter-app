import React from "react";
import "../Products/Products.css";
import Card from "../Components/Card";

function Products({ data }) {
  return (
    <>
      <section className="card-container">
        {data?.map(({ images, title, rating, price }) => (
          <Card
            key={Math.random()}
            images={images}
            title={title}
            rating={rating}
            price={price}
          />
        ))}
      </section>
    </>
  );
}

export default Products;
