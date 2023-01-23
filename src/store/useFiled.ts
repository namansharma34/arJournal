import { create } from "zustand";
import subject from "../utils/subject";
type Filed = "header" | "author" | "wallet";
interface State {
  text: string;
  setText: (e: string) => void;
  subject: "all" | (typeof subject)[0];
  setSubject: (e: (typeof subject)[0]) => void;
  filed: Filed;
  setFiled: (_filed: Filed) => void;
  error: undefined | string;
  setError: (e: string | undefined) => void;
  searching: boolean;
  setSearching: (e: boolean) => void;
}
const useFiled = create<State>((set) => ({
  text: "",
  setText: (e: string) => set(() => ({ text: e })),
  subject: "all",
  setSubject: (e: (typeof subject)[0]) => set(() => ({ subject: e })),
  filed: "header",
  setFiled: (_filed: Filed) => set(() => ({ filed: _filed })),
  error: undefined,
  setError: (e: string | undefined) => set(() => ({ error: e })),
  searching: false,
  setSearching: (e) => set(() => ({ searching: e })),
}));
export default useFiled;
