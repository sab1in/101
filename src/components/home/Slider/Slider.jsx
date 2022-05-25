import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const Slider = () => {
  // data for slider
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
    <section className="bg-blue-100 py-8">
      <div className="flex my-2 justify-center items-center gap-1">
        <div className="h-0.5 w-4 bg-blue-600"></div>
        <p className="text-sm font-medium ">Our</p>
        <p className="text-sm font-medium text-blue-600">Team</p>
      </div>
      <h1 className="text-3xl text-center font-semibold">
        Our <span className="text-blue-600">Core</span> member
      </h1>
      <div
        ref={main}
        style={{
          width: "94vw",
        }}
        className="overflow-hidden mx-auto"
      >
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

export default Slider;
