import {
  ShieldCheckIcon,
  LightningBoltIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const data = [
  {
    title: "Insurance",
    descp: "Property Coverage",
    wallet: "LTC Wallet",
    date: "7 Jun, 21",
    amount: "-10.24 LTC",
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    bg: "bg-blue-200",
    text: "text-blue-400",
  },
  {
    title: "Electricity",
    descp: "Utility payments",
    wallet: "ETH Wallet",
    date: "9 Jun, 21",
    amount: "-3.543 ETH",
    icon: <LightningBoltIcon className="w-8 h-8" />,
    bg: "bg-red-200",
    text: "text-red-400",
  },
  {
    title: "Salaries",
    descp: "Company payments",
    wallet: "BTC Wallet",
    date: "11 Jun, 21",
    amount: "-4.258 ETH",
    icon: <UserGroupIcon className="w-8 h-8" />,
    bg: "bg-yellow-200",
    text: "text-yellow-400",
  },
];
export default data;
