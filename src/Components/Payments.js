import React from "react";
import PaymentUI from "./PaymentUI";
import { PlusIcon } from "@heroicons/react/outline";

const Payments = () => {
  return (
    <div className="px-5 py-4">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="xl:text-4xl text-lg font-medium">Payments</h1>
          <button className="bg-gray-100 hover:bg-opacity-50 xl:px-7 xl:py-2 px-3 py-1 text-sm xl:text-base rounded-2xl font-medium">
            Clear
          </button>
        </div>
        <div className="flex flex-col">
          <PaymentUI />
        </div>
        <button className="lg:w-3/4 w-full mx-auto mt-5 py-3 rounded-xl flex items-center justify-center bg-purple-400 bg-opacity-40 hover:bg-opacity-60">
          <span className="flex items-center justify-center text-purple-800 font-medium text-sm xl:text-base">
            <PlusIcon className="w-5 h-5 mr-2" /> New Transfer
          </span>
        </button>
      </div>
    </div>
  );
};

export default Payments;
