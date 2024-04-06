import React from 'react'
import './GigCard.scss'
import { Link } from 'react-router-dom';
function GigCard({card}) {

  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={card.img} />
        <div className="info">
          <div className="user">
            <img src={card.pp} className=''/>
            <span>{card.username}</span>
          </div>
          {/* <p >{card.desc}</p> */}
          <div className="star">
            <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
            <span>{card.star}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="https://tse1.mm.bing.net/th?id=OIP.0MUJfL1fByZHR_lgxQ_7QgHaG7&pid=Api&P=0&h=180" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              $ {card.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};


export default GigCard