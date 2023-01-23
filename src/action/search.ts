import useSearchData from "../store/useSearchData";
import useFiled from "../store/useFiled";
import { contractTxId, _warp } from "../utils/config";
import { DB as DbState } from "../utils/config";
const search = async () => {
  const text = useFiled.getState().text;
  const filed = useFiled.getState().filed;
  const subject = useFiled.getState().subject;
  const setError = useFiled.getState().setError;
  const set_d = useSearchData.getState().setDB;
  const setSearching = useFiled.getState().setSearching;
  setError(undefined);
  useSearchData.setState({ db: undefined });
  setSearching(true);
  if (text?.length) {
    const warp = _warp;
    const contract = warp.contract(contractTxId);
    if (filed === "header" && subject === "all") {
      const data = await contract.viewState({
        function: "getByHeader",
        header: text,
      });
      //@ts-ignore
      if (data.result.success) {
        //@ts-ignore
        set_d(data.result.db);
      } else {
        set_d(false);
      }
    } else if (filed === "author" && subject === "all") {
      const data = await contract.viewState({
        function: "getByAuthor",
        author: text,
      });
      //@ts-ignore
      if (data.result.success) {
        //@ts-ignore
        set_d(data.result.db);
      } else {
        set_d(false);
      }
    } else if (filed === "wallet" && subject === "all") {
      const data = await contract.viewState({
        function: "getByWallet",
        wallet: text,
      });
      //@ts-ignore
      if (data.result.success) {
        //@ts-ignore
        set_d(data.result.db);
      } else {
        set_d(false);
      }
    } else if (filed === "header" && subject !== "all") {
      const data = await contract.viewState({
        function: "getByHeader",
        header: text,
      });
      //@ts-ignore
      if (data.result.success) {
        //@ts-ignore
        const _data = data.result.db as DbState;
        const _tdata = _data.filter((e) => e.subject == subject);
        if (_tdata.length) {
          //@ts-ignore
          set_d(_tdata as DbState);
        } else {
          set_d(false);
        }
      } else {
        set_d(false);
      }
    } else if (filed === "author" && subject !== "all") {
      const data = await contract.viewState({
        function: "getByAuthor",
        author: text,
      });
      //@ts-ignore
      if (data.result.success) {
        //@ts-ignore
        const _data = data.result.db as DbState;
        const _tdata = _data.filter((e) => e.subject == subject);
        if (_tdata.length) {
          //@ts-ignore
          set_d(_tdata as DbState);
        } else {
          set_d(false);
        }
      } else {
        set_d(false);
      }
    } else if (filed === "wallet" && subject !== "all") {
      const data = await contract.viewState({
        function: "getByWallet",
        wallet: text,
      });
      //@ts-ignore
      if (data.result.success) {
        //@ts-ignore
        const _data = data.result.db as DbState;
        const _tdata = _data.filter((e) => e.subject == subject);
        if (_tdata.length) {
          //@ts-ignore
          set_d(_tdata as DbState);
        } else {
          set_d(false);
        }
      } else {
        set_d(false);
      }
    }
    setSearching(false);
  } else {
    setSearching(false);
    setError("Please Enter a Valid Input");
  }
};
export default search;
