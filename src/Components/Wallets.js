import React from "react";
import data from "./API/WalletAPI";

const Wallets = () => {
  return (
    <div className="px-5 py-4">
      <h1 className="text-4xl font-medium">Wallets</h1>
      <div className="mt-5">
        {data.map((item) => {
          return (
            <div className="flex justify-between mt-3 space-y-2">
              <div className="flex items-center cursor-pointer">
                <span
                  className={`${item.bg} w-11 h-11 rounded-xl flex items-center justify-center`}
                >
                  <img src={item.img} alt="" />
                </span>
                <div className="flex flex-col ml-1">
                  <span className="font-semibold">{item.coin}</span>
                  <span className="text-sm">{item.name}</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold">{item.perc}</span>
                <span
                  className={`${
                    item.type === "profit" ? "text-green-400" : "text-red-400"
                  } font-semibold text-sm`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wallets;
