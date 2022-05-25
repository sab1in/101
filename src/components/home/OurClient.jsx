import React from "react";
import Prestige from "../../image/Prestige.jpg";
import Lions from "../../image/Lions.jpg";
import cornice from "../../image/All cornice.jpg";
import "./ourClient.css";

const OurClient = () => {
  const images = [Prestige, cornice, Prestige, cornice];
  return (
    <section className="p-2 sm:p-8 flex justify-center items-center flex-col ">
      <div className="flex my-2 justify-center items-center gap-1">
        <div className="h-0.5 w-4 bg-blue-600"></div>
        <p className="text-sm font-medium ">Our</p>
        <p className="text-sm font-medium text-blue-600">Costumers</p>
      </div>
      <h1 className="text-3xl text-center font-semibold">
        Our <span className="text-blue-600">Clients</span> Love Our Work
      </h1>
      <p className="text-sm mt-2 font-medium text-gray-600">
        But don’t just take our word for it...
      </p>
      <div
        style={{
          maxWidth: "94vw",
        }}
        className="flex mt-8 lg:w-auto overflow-y-hidden scrollbar overflow-x-auto md:overflow-x-hidden gap-8"
      >
        {Array.isArray(images) &&
          images.map((item, index) => {
            return (
              <img
                key={index}
                src={item}
                className="w-52 mx-auto transform hover:scale-105 transition duration-300"
                alt="Prestige"
              />
            );
          })}
      </div>
    </section>
  );
};
export default OurClient;
