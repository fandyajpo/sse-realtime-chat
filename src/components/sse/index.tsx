"use client";
import { useEffect, useState } from "react";

export const Ping = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const source = new EventSource("http://localhost:3001/sse");

    source.onmessage = (event) => {
      const parsed = event?.data;
      setValue(parsed);
    };

    return () => {
      source.close();
    };
  }, []);

  return (
    <div>
      <p>hai</p>
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>
  );
};
