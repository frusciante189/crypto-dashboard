import React from "react";
import SidebarCard from "./SidebarCard";
import SidebarHeader from "./SidebarHeader";
import SidebarItems from "./SiderbarItems";
import { useToggle } from "../Providers/Context";

const style = {
  default: `h-screen overflow-y-auto lg:block xl:w-80 lg:w-64 w-72 bg-gray-300 lg:relative`,
  mobilePosition: {
    left: "left-0",
    right: "right-0",
  },
  close: `hidden`,
  open: `absolute z-40`,
};

const Sidebar = ({ mobilePosition }) => {
  const { open, ref } = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.default} ${style.mobilePosition[mobilePosition]} 
      ${open ? style.open : style.close}`}
    >
      <div className="flex flex-col ">
        <SidebarHeader />
        <SidebarItems />
        <SidebarCard />
      </div>
    </aside>
  );
};

export default Sidebar;
