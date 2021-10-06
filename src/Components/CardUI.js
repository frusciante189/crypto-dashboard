import { DotsHorizontalIcon } from "@heroicons/react/outline";
import data from "./API/CoinAPI";

const CardUI = () => {
  return (
    <>
      {data.map((coin) => {
        return (
          <div
            className={`${coin.bg} bg-opacity-70 hover:bg-opacity-100 xl:max-w-[200px] lg:max-w-[180px] md:max-w-sm max-w-lg mx-auto w-full px-3 py-5 rounded-xl cursor-pointer transition-colors duration-200 transform hover:scale-105`}
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">{coin.name}</span>
              <span>
                <DotsHorizontalIcon className="w-6 h-6" />
              </span>
            </div>
            <div className="flex items-center justify-center mt-5">
              <img src={coin.image} alt="btc" className="h-24" />
            </div>
            <div className="flex flex-col space-y-2 my-3 whitespace-nowrap">
              <span className="xl:text-2xl lg:text-lg text-2xl font-medium">
                {coin.amount}
              </span>
              <span className="text-sm font-medium">{coin.value}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardUI;
