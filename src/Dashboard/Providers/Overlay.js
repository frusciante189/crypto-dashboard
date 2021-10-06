import { useToggle } from "./Context";
const style = {
  overlay: `bg-black fixed h-screen left-0 opacity-40 top-0 w-screen z-30 lg:hidden`,
};

const Overlay = () => {
  const { open } = useToggle();
  return <div className={open ? style.overlay : ""} />;
};

export default Overlay;
