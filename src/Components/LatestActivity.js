import React from "react";
import { CogIcon, PlusIcon } from "@heroicons/react/outline";
import ActivityUI from "./ActivityUI";

const LatestActivity = () => {
  return (
    <div className="lg:px-5 py-4 mt-5">
      <div>
        <div className="flex justify-between">
          <div className="flex flex-col justify-center items-start space-y-2">
            <h1 className="font-semibold text-3xl tracking-wide text-gray-700">
              Latest Activity
            </h1>
            <span className="tracking-tight font-medium text-gray-500">
              Updated 4 minutes ago
            </span>
          </div>
          <div className="flex space-x-2 items-center">
            <span className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-xl">
              <CogIcon className="w-6 h-6 cursor-pointer text-gray-600" />
            </span>
            <span className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-xl">
              <PlusIcon className="w-6 h-6 cursor-pointer text-gray-600" />
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <ActivityUI />
        </div>
      </div>
    </div>
  );
};

export default LatestActivity;
