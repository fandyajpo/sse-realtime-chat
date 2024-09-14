import { NextFetch } from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";
export const useSendContent = () => {
  const mutationKey = ["SEND_CONTENT"];
  const mutationFn = async (content?: string) => {
    return await NextFetch("api/content", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      data: { content },
    });
  };

  return useMutation({
    mutationKey,
    mutationFn,
  });
};
