import { create } from "zustand";
import subject from "../utils/subject";
interface State {
  header: string;
  setHeader: (v: string) => void;
  author: string;
  setAuthor: (v: string) => void;
  _subject: "all" | typeof subject;
  setSubject: (v: "all" | typeof subject) => void;
  file: Uint8Array | undefined;
  setFile: (v: Uint8Array) => void;
  uploading: boolean;
  setUploading: (_f: boolean) => void;
}
const useRegister = create<State>((set) => ({
  header: "",
  setHeader: (v) => set({ header: v }),
  author: "",
  setAuthor: (v) => set({ author: v }),
  _subject: "all",
  setSubject: (v) => set({ _subject: v }),
  file: undefined,
  setFile: (v) => set({ file: v }),
  uploading: false,
  setUploading: (_f) => set({ uploading: _f }),
}));

export default useRegister;
