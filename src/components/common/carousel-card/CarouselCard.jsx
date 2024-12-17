import React, { useRef, useEffect, useState } from "react";
import { CarouselCardWrapper } from "./CarouselCard.styled";
import { ReactComponent as RightArrowIcon } from "../../../assets/icon/right-arrow.svg";

const CarouselCard = ({ cards }) => {
  const carouselRef = useRef(null);
  const [clonedCards, setClonedCards] = useState([]);

  useEffect(() => {
    setClonedCards([...cards, ...cards]);
  }, [cards]);

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });

      if (
        carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
        carouselRef.current.scrollWidth
      ) {
        carouselRef.current.scrollLeft = 0;
      }
    }
  };

  return (
    <CarouselCardWrapper>
      <div className="carousel-container">
        <div className="carousel" ref={carouselRef}>
          {clonedCards.map((card, index) => (
            <div className="card" key={index}>
              <div className="card-image">
                {typeof card.image === "string" ? (
                  <img src={card.image} alt={card.name} />
                ) : (
                  card.image
                )}
              </div>
              <h3
                className={`card-title ${
                  card.role === "CEO" ? "bold-text" : ""
                }`}
              >
                {card.name}
              </h3>
              <p
                className={`card-role ${
                  card.role === "CEO" ? "bold-text" : ""
                }`}
              >
                {card.role}
              </p>
            </div>
          ))}
        </div>
        <div>
          <button className="scroll-button" onClick={scrollRight}>
            <RightArrowIcon />
          </button>
        </div>
      </div>
    </CarouselCardWrapper>
  );
};

export default CarouselCard;
