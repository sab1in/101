import React from "react";
import "./card.css";

const Card = ({
  setActiveSlide,
  activeSlide,
  index,
  description,
  name,
  image,
  position,
  DataListLength,
}) => {
  // social media icons ref
  const link = React.useRef();

  return (
    <div
      onMouseOver={() => {
        if (activeSlide === index + 1) {
          link.current.style.opacity = "1";
        }
      }}
      onMouseOut={() => {
        if (activeSlide === index + 1) {
          link.current.style.opacity = "0";
        }
      }}
      style={{
        transition: "transform 0.5s",
      }}
      className={`w-80 flex-shrink-0 py-10  relative ${
        activeSlide === index + 1 ? "z-10 " : "z-0"
      } ${
        activeSlide < index + 1
          ? `transform  scale-75 translate-y-${
              (index + 1 - activeSlide) * 16
            } rotate-12`
          : activeSlide > index + 1
          ? `transform  scale-75 translate-y-${
              (activeSlide - (index + 1)) * 16
            } -rotate-12
                    `
          : ""
      }`}
    >
      <div className="flex items-center gap-2">
        {activeSlide !== 1 && (
          <svg
            className={`w-8 h-8 cursor-pointer focus:w-12 focus:h-12 text-primary ${
              activeSlide === index + 1 ? "opacity-100 " : "opacity-0"
            }`}
            onClick={() => {
              activeSlide !== 1 && setActiveSlide(activeSlide - 1);
              link.current.style.opacity = "0";
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        )}
        <div className="h-40 w-40 m-auto relative rounded-full pentagon overflow-hidden">
          {
            <div
              ref={link}
              style={{
                background:
                  "linear-gradient(0deg, rgba(117, 59, 189, 0.5), rgba(117, 59, 189, 0.5))",
                transition: "opacity 0.5s",
              }}
              className="w-full h-full opacity-0 absolute flex items-center justify-center gap-2"
            >
              <svg
                className="w-8 h-8 cursor-pointer text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <svg
                className="w-8 h-8 cursor-pointer text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          }
          <img
            src={image}
            className="object-cover h-full w-full bg-cover"
            alt="images"
          />
        </div>
        {activeSlide !== DataListLength && (
          <svg
            className={`w-8 h-8 cursor-pointer focus:w-12 focus:h-12 text-primary  ${
              activeSlide === index + 1 ? "opacity-100 " : "opacity-0"
            }`}
            onClick={() => {
              activeSlide !== DataListLength && setActiveSlide(activeSlide + 1);
              link.current.style.opacity = "0";
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        )}
      </div>

      <br />
      <h1
        style={{
          transition: "transform 0.5s",
        }}
        className={`text-lg mt-1 font-semibold text-primary text-center ${
          activeSlide === index + 1 ? "opacity-100 " : "opacity-0"
        }`}
      >
        {name}
      </h1>
      <h6
        className={`${
          activeSlide === index + 1 ? "opacity-100 " : "opacity-0"
        } text-center text-gray-600 text-sm font-medium`}
      >
        {position}
      </h6>
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
      <div
        className={`flex justify-center w-full ${
          activeSlide === index + 1 ? "opacity-100 " : "opacity-0"
        }`}
      >
        <button className="text-white py-2 px-2 mx-auto mt-4 rounded-md text-sm  bg-primary ">
          Join Our Team
        </button>
      </div>

      {/* <br />
      <div
        style={{
          transition: "transform 0.5s",
        }}
        className={`${
          activeSlide === index + 1 ? "opacity-100 " : "opacity-0"
        }`}
        onClick={() => {
          setActiveSlide(activeSlide + 1);
          forwardedRef.main.current.scrollTo({
            top: 0,
          });
        }}
      >
        up
      </div>
      <div
        style={{
          transition: "transform 0.5s",
        }}
        className={`${
          activeSlide === index + 1 ? "opacity-100 " : "opacity-0"
        }`}
        onClick={() => {
          setActiveSlide(activeSlide - 1);
        }}
      >
        down
      </div> */}
    </div>
  );
};

export default Card;
