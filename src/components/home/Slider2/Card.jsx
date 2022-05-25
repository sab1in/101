import React from "react";
import "./card.css";

const Card = ({ activeSlide, index, description, name, position }) => {
  return (
    <div
      style={{
        transition: "transform 0.5s",
      }}
      className={`w-64 sm:w-80 md:w-500 flex-shrink-0 py-10  relative ${
        activeSlide === index + 1 ? "z-10 " : "z-0"
      } ${
        activeSlide < index + 1
          ? `transform  scale-75 translate-y-${8}`
          : activeSlide > index + 1
          ? `transform  scale-75 translate-y-${8} 
                    `
          : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="h-40 w-40 m-auto relative rounded-full  overflow-hidden">
          <img
            src="https://thumbs.dreamstime.com/b/chris-evans-world-premiere-avengers-endgame-held-la-convention-center-los-angeles-usa-april-chris-evans-145707055.jpg"
            className="object-cover h-full w-full bg-cover"
            alt="images"
          />
        </div>
      </div>

      <br />

      <p
        style={{
          transition: "transform 0.5s",
        }}
        className={`text-center mt-2 text-sm  ${
          activeSlide === index + 1 ? "opacity-100 " : "opacity-0"
        }`}
      >
        {description}
      </p>

      <h1
        style={{
          transition: "transform 0.5s",
        }}
        className={`text-base mt-3 font-semibold text-primary text-center ${
          activeSlide === index + 1 ? "opacity-100 " : "opacity-0"
        }`}
      >
        {name}
      </h1>
      <p
        style={{
          transition: "transform 0.5s",
        }}
        className={`text-base font-semibold text-primary text-center ${
          activeSlide === index + 1 ? "opacity-100 " : "opacity-0"
        }`}
      >
        {position}
      </p>
    </div>
  );
};

export default Card;
