import React from "react";
import CardUI from "./CardUI";

const CoinCards = () => {
  return (
    <div className="xl:px-5 lg:-mx-5 py-4 mt-5">
      <div className="flex flex-col items-start">
        <div className="flex justify-center md:justify-start w-full">
          <h1 className="text-4xl font-medium">
            Hi, <span className="font-normal text-3xl">John</span>
          </h1>
          <div className="bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center -mt-2 -ml-1">
            <span>4</span>
          </div>
        </div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-3 lg:gap-y-0 mt-5">
          <CardUI />
        </div>
      </div>
    </div>
  );
};

export default CoinCards;
