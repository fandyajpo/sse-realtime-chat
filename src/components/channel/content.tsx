"use client";
import { useStore } from "@/utils/context";
import { useEffect, useRef } from "react";
import { ChannelHeader } from "@/components/channel/header";

export const Content = () => {
  const { message } = useStore();
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to the bottom when a new message is added
  useEffect(() => {
    scrollToBottom();
  }, [message]);
  return (
    <div className="w-full bg-gray-100 border h-full space-y-2 overflow-y-scroll">
      <ChannelHeader />
      <div className="p-4 space-y-2">
        {message.map((item, key) => {
          return (
            <div key={key?.toString()} className="flex gap-2">
              <div className="">
                <div
                  style={{
                    backgroundColor: item?.color,
                  }}
                  className="w-10 h-10 rounded-full flex justify-center items-center"
                >
                  <p>{item?.username?.at(0)}</p>
                </div>
              </div>
              <div className="space-y-1 bg-gray-200 p-2 rounded-sm">
                <p
                  className="font-semibold"
                  style={{
                    color: item?.color,
                  }}
                >
                  {item?.username}
                </p>
                <div className="rounded w-fit h-fit">
                  <p className="text-sm">{item.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div ref={messageEndRef} />
    </div>
  );
};
