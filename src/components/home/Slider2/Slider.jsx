import React, { useEffect, useState } from "react";
import Card from "./Card";
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
const Slider2 = () => {
  const [sliderWidth, setSliderWidth] = useState(window.innerWidth);
  const handleResize = () => {
    const innerWidth = window.innerWidth;
    if (sliderWidth !== innerWidth) {
      setActiveSlide(
        (DataList.length / 2) % 2 === 0
          ? DataList.length / 2
          : DataList.length / 2 + 0.5
      );
      setSliderWidth(innerWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // slider state
  const [activeSlide, setActiveSlide] = useState(
    (DataList.length / 2) % 2 === 0
      ? DataList.length / 2
      : DataList.length / 2 + 0.5
  );

  // slider card width
  const [width, setWidth] = useState(
    sliderWidth <= 640 ? 256 : sliderWidth <= 768 ? 320 : 500
  );

  // slider  width

  // slider width update
  useEffect(() => {
    setWidth(sliderWidth <= 640 ? 256 : sliderWidth <= 768 ? 320 : 500);
  }, [sliderWidth]);

  return (
    <section className="bg-primary1 py-8 ">
      <div className="flex my-2 justify-center items-center gap-1">
        <div className="h-0.5 w-4 bg-primary"></div>
        <p className="text-sm font-medium ">Our</p>
        <p className="text-sm font-medium text-primary">TESTIMONIALS</p>
      </div>
      <h1 className="text-3xl text-center font-semibold">
        What our <span className="text-primary">Trustworthy</span> clients say
      </h1>

      <div
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
            className="px-4 py-1 rounded-tr-full cursor-pointer rounded-br-full rounded-bl-full self-center m-auto  bg-primary"
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
            className="px-4 py-1 rounded-tr-full cursor-pointer rounded-br-full rounded-bl-full self-center m-auto  bg-primary"
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
            width: DataList.length * width,
            left:
              -(activeSlide - 1) * width +
              ((0.94 * sliderWidth) / 2 - width / 2),
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
