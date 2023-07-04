import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

function Card({ images, title, rating, price }) {
  return (
    <section className="card">
      <img className="card-image" src={images} alt={title} />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          <AiFillStar className="ratings-star" />
          <AiFillStar className="ratings-star" />
          <AiFillStar className="ratings-star" />
          <AiFillStar className="ratings-star" />
          <span className="total-reviews">{rating}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <span>{price}</span>
          </div>

          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;
