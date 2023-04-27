// import React from 'react'
// import "./style.css"
// import Card from "./card.js";
// const Cards = ({list}) => {
//   return (
//     <div className='cards-flex'>
// {list.map((card,i)=>
// (<Card card={card} key={i}/>))}

//     </div>
//   )
// }

// export default Cards
import React from "react";
import Card from "./card";
import "./style.css";

function Cards({ list2 }) {
  return (
    <div className="cards-flex">
      {list2.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

export default Cards;
