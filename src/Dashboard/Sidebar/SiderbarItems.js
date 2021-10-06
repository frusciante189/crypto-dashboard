import React from "react";
import data from "./SidebarData";
const style = {
  container: `grid grid-cols-2 px-3 gap-y-3 w-full`,
  linkContainer: `flex flex-col items-center group`,
  linkIcon: `flex bg-gray-200 items-center justify-center w-11 h-11 rounded-xl group-hover:bg-purple-800 transition-colors duration-200 transform`,
  linkText: `text-xs mt-1.5 tracking-wider font-medium`,
};

const SiderbarItems = () => {
  return (
    <nav className="xl:w-10/12 lg:w-full mx-auto">
      <div className="flex flex-col items-center pt-5">
        <div className="grid grid-cols-2 xl:px-3 px-0 gap-y-3 w-full">
          {data.slice(0, 6).map((item) => {
            return (
              <div className="flex flex-col items-center group">
                <a
                  href="/"
                  className="flex bg-gray-200 items-center justify-center w-11 h-11 rounded-xl group-hover:bg-purple-800 transition-colors duration-200 transform"
                >
                  {item.icon}
                </a>
                <a
                  href="/"
                  className="text-xs mt-1.5 tracking-wider font-medium"
                >
                  {item.title}
                </a>
              </div>
            );
          })}
        </div>
        <div className={`${style.container} mt-10`}>
          {data.slice(6, 10).map((item) => {
            return (
              <div className={style.linkContainer}>
                <a href="/" className={style.linkIcon}>
                  {item.icon}
                </a>
                <a href="/" className={style.linkText}>
                  {item.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default SiderbarItems;
