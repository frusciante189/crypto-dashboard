import { BellIcon, ChatAltIcon } from "@heroicons/react/outline";
import Apps from "./Assets/Apps.png";

const Profile = () => {
  return (
    <div className="px-5 py-4 lg:block hidden">
      <div className="flex items-center justify-end">
        <div className="mr-auto">
          <img
            src={Apps}
            alt="Apps"
            className="xl:h-16 xl:w-16 lg:w-10 lg:h-10"
          />
        </div>
        <span className="p-2">
          <ChatAltIcon className="xl:w-7 xl:h-7 w-6 h-6 text-gray-500" />
        </span>
        <span className="p-2">
          <BellIcon className="xl:w-7 xl:h-7 w-6 h-6 text-gray-500" />
        </span>
        <div className="p-2">
          <img
            src="https://images.unsplash.com/photo-1606590056137-c3c4f42074d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
            alt="pp"
            className="xl:w-14 lg:w-10 xl:h-14 lg:h-10 rounded-2xl object-cover bg-center bg-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
