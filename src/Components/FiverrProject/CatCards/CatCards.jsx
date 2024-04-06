import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss"

function CatCard({ card }) {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={card.img} className="imgCatcard" />
        <span className="desc">{card.desc}</span>
        <span className="title1">{card.title}</span>
      </div>
    </Link>
  );
}
export default CatCard;