import React, { useEffect, useState } from "react";
import Card from "./card";

const DataList = [
  {
    name: "Sagar Chettri",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960",
    description:
      "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things.",
    position: "Full stack developer",
  },
  {
    name: "Sagar Chettri",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960",
    description:
      "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things.",
    position: "Full stack developer",
  },
  {
    name: "Sagar Chettri",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960",
    description:
      "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things.",
    position: "Full stack developer",
  },

  {
    name: "Sagar Chettri",
    image:
      "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
    description:
      "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things.",
    position: "Full stack developer",
  },
  {
    name: "Sagar Chettri",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960",
    description:
      "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things.",
    position: "Full stack developer",
  },
  {
    name: "Sagar Chettri",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv9zzOmzF32TNcQ2O93T21Serg2aJj5O-1hrQdZiE6ITGiKLsW4rjgVpX-asQYXa4iVeA&usqp=CAU",
    description:
      "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things.",
    position: "Full stack developer",
  },
  {
    name: "Sagar Chettri",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960",
    description:
      "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things.",
    position: "Full stack developer",
  },
  {
    name: "Sagar Chettri",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960",
    description:
      "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things.",
    position: "Full stack developer",
  },
  {
    name: "Sagar Chettri",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960",
    description:
      "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things.",
    position: "Full stack developer",
  },
];

const Slider = () => {
  // slider state
  const [activeSlide, setActiveSlide] = useState(
    (DataList.length / 2) % 2 === 0
      ? DataList.length / 2
      : DataList.length / 2 + 0.5
  );

  const [sliderWidth, setSliderWidth] = useState(window.innerWidth);

  const handleResize = () => {
    const innerWidth = window.innerWidth;
    if (sliderWidth !== innerWidth) {
      setSliderWidth(innerWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <section className="bg-primary1 py-8 overflow-hidden">
      <div className="flex my-2 justify-center items-center gap-1">
        <div className="h-0.5 w-4 bg-primary"></div>
        <p className="text-sm font-medium ">Our</p>
        <p className="text-sm font-medium text-primary">Team</p>
      </div>
      <h1 className="text-3xl text-center font-semibold">
        Our <span className="text-primary">Core</span> member
      </h1>
      <div
        style={{
          width: "100vw",
        }}
        className="overflow-hidden mx-auto"
      >
        <div
          style={{
            width: DataList.length * 320,
            left: -(activeSlide - 1) * 320 + (sliderWidth / 2 - 320 / 2),
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

export default Slider;
