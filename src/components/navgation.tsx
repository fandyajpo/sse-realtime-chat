"use client";
import { usePathname } from "next/navigation";
import { useTransition, animated } from "@react-spring/web";
import { PropsWithChildren } from "react";
import Link from "next/link";

interface Props extends PropsWithChildren {}

export const Navigation = (props: Props) => {
  const pathname = usePathname();
  const transitions = useTransition(pathname, {
    from: { opacity: 0, transform: "translate3d(100vw, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-20vw, 0, 0)" },
  });
  return (
    <>
      <div className="flex gap-2 bg-blue-500 p-4">
        <Link href={"/me"}>Me</Link>
        <Link href={"/"}>home</Link>
      </div>
      {transitions((style, item) => (
        <animated.div style={style}>{item}</animated.div>
      ))}
    </>
  );
};
