// import React from 'react'
// import "./style.css"
// import hotel from "../../assets/hotels/hotel-1.jpeg"
// import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper";
// const card = ({card}) => {
//   return (
//     <div className='card-box'>
//           <Swiper
//         slidesPerView={1}
//         spaceBetween={15}
//         loop={true}
//         mousewheel={true}
//         cssMode={true}
//         pagination
//         modules={[Pagination, Navigation]}
//         className="swiper-container"
//       >
//         {card.imgSrc.map((src, i) => (
//           <SwiperSlide key={i}>
//             <img src={src} className="card-img" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     {/* <img src={hotel} className='card-img' /> */}
//     <div className="card-info-flex">
//       <h3 className='card-title'>{card.title}</h3>
//       <div className="card-rating">
//         <StarRateRoundedIcon/>
//         <p>{card.rating}</p>
//       </div>
//       </div>
//       <p style={{margin:"0", color:"var(--font-grey)" }}>{card.desc}</p>
//       <p style={{margin:"0", color:"var(--font-grey)"}}>{card.date}</p>
//       <p style={{margin:"0.2rem", color:"var(--black)"}}><strong style={{fontWeight:"800"}}>${card.price}</strong> night</p>

//     </div>
//   )
// }

// export default card
import React from "react";
import "./style.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Card({ card }) {
  return (
    <div className="card-box">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {card.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} className="card-img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-info-flex">
        <h3 className="card-title">{card.title}</h3>
        <div className="card-rating">
          <StarRateRoundedIcon />
          <p>{card.rating}</p>
        </div>
      </div>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.desc}</p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.date}</p>
      <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
        <span style={{ fontWeight: "600" }}>₹{card.price}</span> night
      </p>
    </div>
  );
}
export default Card;

