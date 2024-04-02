import { create } from "zustand";

type ProviderState = {
  data: object;
  setData: (data: object) => void;
};

const useProvider = create<ProviderState>((set) => ({
  data: {},
  setData: (data) => set((state) => ({ ...state, data })),
}));

export default useProvider;