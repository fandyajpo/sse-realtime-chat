"use client";

import { useLogout } from "@/query/login";
export const ChannelHeader = () => {
  const { mutate } = useLogout();

  return (
    <div className="h-14 backdrop-blur-sm border-b bg-white/50 border-gray-300 w-full sticky top-0 flex justify-between items-center px-4">
      <p>Fandy Fans</p>
      <button type="button" onClick={() => mutate()}>
        Logout
      </button>
    </div>
  );
};
