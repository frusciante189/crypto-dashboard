import { DotsHorizontalIcon, MenuIcon } from "@heroicons/react/outline";
import { useToggle } from "../Dashboard/Providers/Context";

const SearchBar = () => {
  const { toggle } = useToggle();

  return (
    <nav>
      <div className="flex items-center justify-between px-5 py-4">
        <span className="block lg:hidden" onClick={toggle}>
          <MenuIcon className="w-7 h-7 cursor-pointer mr-auto" />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="w-5/6 py-3 pl-10 rounded-full focus:outline-none bg-gray-400 bg-opacity-75 placeholder-gray-50 focus:bg-opacity-90 text-gray-100 relative"
        />
        <span className="text-gray-500 pl-5 lg:pl-0 hidden lg:block">
          <DotsHorizontalIcon className="w-7 h-7 cursor-pointer" />
        </span>
      </div>
    </nav>
  );
};

export default SearchBar;
