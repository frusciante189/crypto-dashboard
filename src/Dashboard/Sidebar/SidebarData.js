import {
  TemplateIcon,
  CalculatorIcon,
  CreditCardIcon,
  ColorSwatchIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  FireIcon,
  UserIcon,
  CogIcon,
  BellIcon,
} from "@heroicons/react/outline";

const style = {
  icon: `w-7 h-7 text-gray-500 group-hover:text-gray-200`,
};

const data = [
  {
    title: "Dashboard",
    icon: <TemplateIcon className={style.icon} />,
  },
  {
    title: "Calculator",
    icon: <CalculatorIcon className={style.icon} />,
  },
  {
    title: "Wallets",
    icon: <CreditCardIcon className={style.icon} />,
  },
  {
    title: "Savings",
    icon: <ColorSwatchIcon className={style.icon} />,
  },
  {
    title: "Currencies",
    icon: <CurrencyDollarIcon className={style.icon} />,
  },
  {
    title: "Expenses",
    icon: <ShoppingBagIcon className={style.icon} />,
  },
  {
    title: "Upcoming",
    icon: <FireIcon className={style.icon} />,
  },
  {
    title: "Notificaitons",
    icon: <BellIcon className={style.icon} />,
  },
  {
    title: "Settings",
    icon: <CogIcon className={style.icon} />,
  },
  {
    title: "Account",
    icon: <UserIcon className={style.icon} />,
  },
];

export default data;
