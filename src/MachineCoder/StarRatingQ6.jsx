import React, { useState } from 'react'

const StarRatingQ6 = ({StarRating=5}) => {

    const [rating,setRating]=useState(0);
    const[hover,setHover]=useState(0);
  return (
    <div style={{ display: "flex", gap: "5px", cursor: "pointer" }}>
      {[...Array(StarRating)].map((_, index) => {
        const value = index + 1;

        return (
          <span
            key={index}
            onClick={() => setRating(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            style={{
              fontSize: "30px",
              color: value <= (hover || rating) ? "#ffc107" : "#e4e5e9"
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  )
}

export default StarRatingQ6
