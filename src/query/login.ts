import { NextFetch } from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";
import { getRandomHexColor } from "@/utils/func";
import { useRouter } from "next/navigation";
export const useLogin = () => {
  const router = useRouter();
  const color = getRandomHexColor();
  const mutationKey = ["LOGIN"];
  const mutationFn = async (username: string) => {
    return await NextFetch("api", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      data: { username, color },
    });
  };

  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: () => router.replace("/"),
  });
};

export const useLogout = () => {
  const router = useRouter();
  const mutationKey = ["LOGOUT"];
  const mutationFn = async () => {
    return await NextFetch("api", {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
    });
  };

  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: () => router.refresh(),
  });
};
