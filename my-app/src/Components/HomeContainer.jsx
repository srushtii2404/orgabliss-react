import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { herodata } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">Fast Delivery</p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img src={Delivery} className="w-full h-full object-contain" alt="delivery" />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]"> Your City</span>
        </p>

        <p className="text-base text-textColor text-justify md:text-justify md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit eaque fugit distinctio est nam voluptatum architecto, porro iusto deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere suscipit!
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img src={HeroBg} className="ml-auto h-420 w-full lg:w-auto lg:h-650" alt="hero-bg" />

        <div className="w-full h-full absolute top-0 left-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-4 px-6">
          {herodata &&
            herodata.map((n) => (
              <div
                key={n.id}
                className="p-2 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                style={{ minWidth: "150px" }} 
              >
                <img
                  src={n.imgsrc}
                  className="w-20 lg:w-40 h-auto object-contain -mt-10 lg:-mt-20"
                  alt={n.name}
                />
                <p className="text-sm lg:text-lg font-semibold text-textColor mt-2 lg:mt-3">
                  {n.name}
                </p>
                <p className="text-[10px] lg:text-xs text-lighttextGray font-semibold my-1 lg:my-2">
                  {n.desc}
                </p>
                <p className="text-xs lg:text-sm font-semibold text-headingColor">
                  <span className="text-[8px] lg:text-xs text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
