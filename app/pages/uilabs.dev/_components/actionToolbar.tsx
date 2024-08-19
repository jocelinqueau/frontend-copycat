"use client";

import { useState } from "react";

import { Commit as CommitIcon } from "../_svgs/commit.svg";

const Analytics = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 text-[#4ade80]">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
          </svg>
        </div>
        <div className="text-[13px] font-medium text-white/80">
          32 online now
        </div>
      </div>
      <div className="px-2 py-1 text-xs font-medium bg-[#4ade80]/10 text-[#4ade80] rounded-md">
        Analytics
      </div>
    </div>
  );
};

const Commit = () => {
  return (
    <div className="flex items-center justify-between gap-2 group">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 text-[#EE0048]">
          <CommitIcon />
        </div>
        <div className="text-[13px] font-medium text-white/80 group-hover:text-white transition-colors duration-200">
          2e860de
        </div>
      </div>
      <div className="px-2 py-1 text-xs font-medium bg-[#EE0048]/10 text-[#EE0048] rounded-md">
        Failed
      </div>
    </div>
  );
};

const Upgrade = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 text-[#F7DF1E]">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
          </svg>
        </div>
        <div className="text-[13px] font-medium text-white/80">
          2 days left in your trial
        </div>
      </div>
      <div className="px-2 py-1 text-xs font-medium bg-[#F7DF1E]/10 text-[#F7DF1E] rounded-md">
        Billing
      </div>
    </div>
  );
};

const ActionToolbar = () => {
  const [activeTab, setActiveTab] = useState("Commit");
  const tabs = ["Commit", "Analytics", "Upgrade"];

  const tabsMap = {
    Commit: <Commit />,
    Analytics: <Analytics />,
    Upgrade: <Upgrade />,
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute bottom-72 left-1/2 -translate-x-1/2 w-[280px] h-[100px] flex flex-col justify-between overflow-hidden rounded-[14px] bg-[#151612] dark:bg-[#161716] shadow-tooltip dark:shadow-inner-shadow-dark-float p-3 cursor-pointer">
        {tabsMap[activeTab as keyof typeof tabsMap]}
        <div className="flex justify-between mt-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-sm font-medium ${
                activeTab === tab
                  ? "text-white"
                  : "text-white/60 hover:text-white/80"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionToolbar;
