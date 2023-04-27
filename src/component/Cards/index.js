import React from "react";
import Card from "./card.js";
import "./styles.css";
function Cards({ list }) {
  return (
    <div className="cards-flex">
       {list.map((card, i) => (
        <Card card={card} key={i} />
      ))} 
      {/* <Card/> */}
    </div>
  );
}

export default Cards;
