import logo from "./logo.png";
const SidebarHeader = () => {
  return (
    <div className="flex h-20 items-center justify-center mt-3">
      <img src={logo} alt="logo" className="h-16 w-16" />
    </div>
  );
};

export default SidebarHeader;
