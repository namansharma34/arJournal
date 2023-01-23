import { create } from "zustand";
type loc = "register" | "disconnect";
interface State {
  location: undefined | loc;
  setLocation: (e: undefined | loc) => void;
}
const useRedirect = create<State>((set) => ({
  location: undefined,
  setLocation: (e) => set(() => ({ location: e })),
}));
export default useRedirect;

