import useData from "../store/useData";
import { contractTxId, _warp } from "../utils/config";

const get = async () => {
  const set_d = useData.getState().setDB;
  const warp = _warp;
  const contract = warp.contract(contractTxId);
  if (window.arweaveWallet) {
    const wallet = await window.arweaveWallet.getActiveAddress();
    const data = await contract.viewState({
      function: "getByWallet",
      wallet: wallet,
    });
    //@ts-ignore
    if (data.result.success) {
      //@ts-ignore
      set_d(data.result.db);
    } else {
      set_d(false);
    }
  }
};
export default get;
