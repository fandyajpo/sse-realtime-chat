"use client";
import { useSpring, animated } from "@react-spring/web";

export function MyComponent() {
  const props = useSpring({
    from: { x: 0 },
    to: { x: 360 },
  });

  return (
    <animated.div
      style={{ transform: props.x.to((value) => `rotateZ(${value}deg)`) }}
    >
      Hello World
    </animated.div>
  );
}
