import diagram from "./diagram.png";

const SidebarCard = () => {
  return (
    <div className="border-2 border-purple-200 bg-purple-200 bg-opacity-30 shadow-2xl drop-shadow-2xl xl:w-3/4 lg:w-10/12 w-3/4 mx-auto mt-10 rounded-2xl relative hover:scale-105 transition-all transform duration-200">
      <div className="flex flex-col items-center justify-center py-5 xl:px-8 lg:px-6 px-5">
        <img src={diagram} alt="diagram" className="w-32 h-32" />
        <button className="bg-white w-full py-2.5 rounded-2xl text-sm text-purple-700 font-medium mt-5 hover:bg-opacity-80">
          Get Pro Now
        </button>
      </div>
    </div>
  );
};

export default SidebarCard;
