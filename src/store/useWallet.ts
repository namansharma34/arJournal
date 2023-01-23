import { create } from "zustand";
interface State {
  address: string | undefined;
  setAddress: (addr: string) => void;
  connection: boolean;
  setConnection: (dec: boolean) => void;
}
const useWallet = create<State>((set) => ({
  address: undefined,
  setAddress: (addr: string) => set(() => ({ address: addr })),
  connection: false,
  setConnection: (dec: boolean) => set(() => ({ connection: dec })),
}));
export default useWallet;
