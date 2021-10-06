import Sidebar from "./Sidebar/Sidebar";
import DashboardProvider from "./Providers/Context";
import Overlay from "./Providers/Overlay";

const Layout = ({ children }) => {
  return (
    <DashboardProvider>
      <div className="bg-gray-500 h-screen overflow-hidden w-full xl:p-5">
        <div className="h-full overflow-hidden xl:rounded-2xl">
          <div className="flex items-start">
            <Overlay />
            <Sidebar mobilePosition="right" />
            <div className="flex h-screen w-full">
              <main className="h-screen w-full overflow-auto">{children}</main>
            </div>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
};

export default Layout;
