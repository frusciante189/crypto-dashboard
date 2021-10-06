import React from "react";
import data from "./API/PaymentAPI";
import { ChevronDownIcon } from "@heroicons/react/outline";

const PaymentUI = () => {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="2xl:px-5 xl:px-2 py-3 rounded-xl mt-5 bg-gray-100 shadow-xl max-w-sm w-full mx-auto hover:scale-105 transform transition-all duration-200">
            <div className="flex flex-col">
              <div className="flex xl:flex-row flex-col justify-between items-center">
                <div className="flex items-center justify-center">
                  <div
                    className={`xl:w-12 lg:w-8 xl:h-12 lg:h-8 flex items-center justify-center rounded-full ${item.bg} bg-opacity-70`}
                  >
                    <img
                      src={item.icon}
                      alt={item.coin}
                      className="xl:h-8 xl:w-8 h-6 w-6"
                    />
                  </div>
                  <span className="font-medium text-sm ml-2.5 text-gray-800 flex">
                    Received <span className="ml-1 font-bold">{item.coin}</span>
                    <ChevronDownIcon className="w-4 h-4 ml-2 cursor-pointer" />
                  </span>
                </div>
                <span className="bg-white shadow-2xl px-2 py-1.5 rounded-xl 2xl:text-sm text-xs font-medium">
                  {item.amount} USD
                </span>
              </div>
              <div className="flex xl:flex-row flex-col-reverse justify-between py-3 items-center">
                <span className="text-sm font-semibold">{item.date}</span>
                <div className="flex -space-x-3 overflow-hidden p-2">
                  <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PaymentUI;
