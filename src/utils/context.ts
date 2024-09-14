import { create } from "zustand";

interface BearValue {
  message: { username?: string; content?: string; color?: string }[];
  profile: { username?: string };
  dispatch: (args: Partial<BearValue>) => void;
}

interface BearState extends BearValue {
  dispatch: (args: Partial<BearValue>) => void;
}

const initial = {
  message: [],
  profile: {},
};

export const useStore = create<BearState>((set) => ({
  ...initial,
  dispatch: (by: Partial<BearValue>) => set(by),
}));
