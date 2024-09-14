"use client";
import { useStore } from "@/utils/context";
import { documentById } from "@/utils/func";
import { useEffect } from "react";
import { PropsWithChildren } from "react";
export const ChannelProvider = (props: PropsWithChildren) => {
  const { dispatch } = useStore();

  useEffect(() => {
    const source = new EventSource(
      process.env.NEXT_PUBLIC_BACKEND_API + "sse",
      {
        withCredentials: true,
      }
    );

    source.onmessage = (event) => {
      const parsed = JSON.parse(event?.data);

      dispatch({ message: parsed?.data });
    };
    source.onerror = console.log;

    return () => {
      console.log("hey");
      source.close();
    };
  }, []);

  return <div>{props?.children}</div>;
};
