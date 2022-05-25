import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const Slider2 = () => {
  // data for slider
  const DataList = [
    {
      name: "Rahul Kalwar",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner, I am used to controlling and always having my finger on the pulse of my employees and contractors. 101infotech has delivered great results and has convinced me of the value of outsourcing. There were times when it was difficult to communicate but after some time or so everything starts to come together.",
      position: "CEO (Danira’s)",
    },
    {
      name: "Rahul Kalwar",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner, I am used to controlling and always having my finger on the pulse of my employees and contractors. 101infotech has delivered great results and has convinced me of the value of outsourcing. There were times when it was difficult to communicate but after some time or so everything starts to come together.",
      position: "CEO (Danira’s)",
    },
    {
      name: "Rahul Kalwar",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner, I am used to controlling and always having my finger on the pulse of my employees and contractors. 101infotech has delivered great results and has convinced me of the value of outsourcing. There were times when it was difficult to communicate but after some time or so everything starts to come together.",
      position: "CEO (Danira’s)",
    },
    {
      name: "Rahul Kalwar",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner, I am used to controlling and always having my finger on the pulse of my employees and contractors. 101infotech has delivered great results and has convinced me of the value of outsourcing. There were times when it was difficult to communicate but after some time or so everything starts to come together.",
      position: "CEO (Danira’s)",
    },
    {
      name: "Rahul Kalwar",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner, I am used to controlling and always having my finger on the pulse of my employees and contractors. 101infotech has delivered great results and has convinced me of the value of outsourcing. There were times when it was difficult to communicate but after some time or so everything starts to come together.",
      position: "CEO (Danira’s)",
    },
    {
      name: "Rahul Kalwar",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner, I am used to controlling and always having my finger on the pulse of my employees and contractors. 101infotech has delivered great results and has convinced me of the value of outsourcing. There were times when it was difficult to communicate but after some time or so everything starts to come together.",
      position: "CEO (Danira’s)",
    },
    {
      name: "Rahul Kalwar",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner, I am used to controlling and always having my finger on the pulse of my employees and contractors. 101infotech has delivered great results and has convinced me of the value of outsourcing. There were times when it was difficult to communicate but after some time or so everything starts to come together.",
      position: "CEO (Danira’s)",
    },
    {
      name: "Rahul Kalwar",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner, I am used to controlling and always having my finger on the pulse of my employees and contractors. 101infotech has delivered great results and has convinced me of the value of outsourcing. There were times when it was difficult to communicate but after some time or so everything starts to come together.",
      position: "CEO (Danira’s)",
    },
    {
      name: "Rahul Kalwar",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner, I am used to controlling and always having my finger on the pulse of my employees and contractors. 101infotech has delivered great results and has convinced me of the value of outsourcing. There were times when it was difficult to communicate but after some time or so everything starts to come together.",
      position: "CEO (Danira’s)",
    },
  ];

  // slider state
  const [activeSlide, setActiveSlide] = useState(
    (DataList.length / 2) % 2 === 0
      ? DataList.length / 2
      : DataList.length / 2 + 0.5
  );

  // slider ref
  const main = useRef();

  // slider card ref
  const card = useRef();

  // slider card width
  const [width, setWidth] = useState(0);

  // slider  width
  const [mainWidth, setMainWidth] = useState(0);

  // slider width update
  useEffect(() => {
    setWidth(card.current.offsetWidth);
    setMainWidth(main.current.offsetWidth);
  }, [card, main]);

  return (
    <section className="bg-blue-100 py-8 ">
      <div className="flex my-2 justify-center items-center gap-1">
        <div className="h-0.5 w-4 bg-blue-600"></div>
        <p className="text-sm font-medium ">Our</p>
        <p className="text-sm font-medium text-blue-600">TESTIMONIALS</p>
      </div>
      <h1 className="text-3xl text-center font-semibold">
        What our <span className="text-blue-600">Trustworthy</span> clients say
      </h1>

      <div
        ref={main}
        style={{
          width: "94vw",
        }}
        className="overflow-hidden relative mx-auto"
      >
        <div className="absolute z-10 left-1 h-full flex items-center">
          <div
            onClick={() => {
              activeSlide !== 1 && setActiveSlide(activeSlide - 1);
            }}
            className="px-4 py-1 rounded-tr-full cursor-pointer rounded-br-full rounded-bl-full self-center m-auto  bg-blue-600"
          >
            <svg
              className={`w-4 h-4   text-white ${"opacity-100 "}`}
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
          </div>
        </div>

        <div className="absolute z-10 right-1 h-full flex items-center">
          {" "}
          <div
            onClick={() => {
              activeSlide !== DataList.length &&
                setActiveSlide(activeSlide + 1);
            }}
            className="px-4 py-1 rounded-tr-full cursor-pointer rounded-br-full rounded-bl-full self-center m-auto  bg-blue-600"
          >
            <svg
              className={`w-4 h-4 cursor-pointer  text-white`}
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
          </div>
        </div>
        <div
          style={{
            width: 9 * width,
            left: -(activeSlide - 1) * width + (mainWidth / 2 - width / 2),
            transition: "all 0.5s ease",
          }}
          className="flex relative"
        >
          {Array.isArray(DataList) &&
            DataList.map((slide, index) => {
              return (
                <Card
                  {...slide}
                  key={index}
                  index={index}
                  setActiveSlide={setActiveSlide}
                  activeSlide={activeSlide}
                  forwardedRef={{ main, card }}
                  DataListLength={DataList.length}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Slider2;
