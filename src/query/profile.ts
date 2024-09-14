import { NextFetch } from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";
export const useProfile = () => {
  const queryKey = ["PROFILE"];
  const queryFn = async () => {
    return await NextFetch("http://localhost:3001/profile", {});
  };

  return useQuery({
    queryKey,
    queryFn,
  });
};
