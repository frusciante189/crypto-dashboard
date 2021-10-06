import React from "react";
import data from "./API/ActivityAPI";

const ActivityUI = () => {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="grid md:grid-cols-4 grid-cols-2 w-full mt-5 gap-y-5 md:gap-y-0 border-b border-gray-300 pb-2 md:border-none">
            <div className="flex items-center justify-center md:justify-start w-3/4 md:w-full">
              <span
                className={`md:h-14 md:w-14 h-12 w-12 flex items-center justify-center mr-3 rounded-2xl ${item.bg} ${item.text}`}
              >
                {item.icon}
              </span>
              <div className="flex flex-col justify-center items-center md:items-start">
                <span className="font-semibold text-gray-700">
                  {item.title}
                </span>
                <span className="text-sm font-medium text-gray-500">
                  {item.descp}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <span className="font-semibold text-gray-700">{item.wallet}</span>
              <span className="text-sm font-medium text-gray-500">
                Personal account
              </span>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <span className="font-semibold text-gray-700">{item.date}</span>
              <span className="text-sm font-medium text-gray-500">
                Last payment
              </span>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <span className="font-semibold text-gray-700">{item.amount}</span>
              <span className="text-sm font-medium text-gray-500">Balance</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ActivityUI;
