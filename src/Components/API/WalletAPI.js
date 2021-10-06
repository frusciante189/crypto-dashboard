import xzc from "../Assets/xzc.png";
import btc from "../Assets/btcc.png";
import pac from "../Assets/pac.png";
import nix from "../Assets/nix.png";

const data = [
  {
    coin: "BTC",
    name: "Bitcoin",
    perc: "37%",
    status: "-2.5%",
    type: "lost",
    img: btc,
    bg: "bg-[#D96100] bg-opacity-30",
  },

  {
    coin: "PAC",
    name: "Pac",
    perc: "23%",
    status: "7.2%",
    type: "profit",
    img: pac,
    bg: "bg-[#EC1550] bg-opacity-30",
  },
  {
    coin: "NIX",
    name: "Nix",
    perc: "20%",
    status: "-3.1%",
    type: "lost",
    img: nix,
    bg: "bg-[#216CDA] bg-opacity-30",
  },
  {
    coin: "XZC",
    name: "ZCoin",
    perc: "17%",
    status: "1.8%",
    type: "profit",
    img: xzc,
    bg: "bg-[#23B852] bg-opacity-30",
  },
];

export default data;
