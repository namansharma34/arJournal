import { create } from "zustand";
import { DB } from "../utils/config";
interface State {
  db: undefined | DB | false;
  setDB: (e: DB | undefined | false) => void;
}
const useSearchData = create<State>((set) => ({
  db: undefined,
  setDB: (e) => set(() => ({ db: e })),
}));
export default useSearchData;
