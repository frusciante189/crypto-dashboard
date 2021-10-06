import React from "react";
import SearchBar from "./SearchBar";
import CoinCards from "./CoinCards";
import LatestActivity from "./LatestActivity";
import Profile from "./Profile";
import Payments from "./Payments";
import Wallets from "./Wallets";
const Main = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full h-full">
      <div className="xl:w-2/3 lg:w-3/4 w-full lg:px-10 px-2 py-5 bg-gray-100">
        <SearchBar />
        <CoinCards />
        <LatestActivity />
      </div>
      <div className="xl:w-1/3 lg:w-1/4 flex-shrink-0 bg-gray-200 overflow-auto">
        <Profile />
        <Payments />
        <Wallets />
      </div>
    </div>
  );
};

export default Main;
