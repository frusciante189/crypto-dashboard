import btc from "../Assets/btc.png";
import chz from "../Assets/chz.png";
import eth from "../Assets/eth.png";

const data = [
  {
    name: "Bitcoin",
    image: btc,
    amount: "0.2231345 BTC",
    value: "11,032.24 USD",
    bg: "bg-btcBg",
  },
  {
    name: "Ethereum",
    image: eth,
    amount: "0.2231345 ETH",
    value: "12,032.24 USD",
    bg: "bg-ethBg",
  },
  {
    name: "Chiliz",
    image: chz,
    amount: "0.2231345 CHZ",
    value: "13,032.24 USD",
    bg: "bg-chzBg md:col-span-2 lg:col-span-1",
  },
];

export default data;
