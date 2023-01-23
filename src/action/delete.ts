import useRedirect from "../store/useRedirect";
import { contractTxId, _warp } from "../utils/config";

const _delete = async (id: string) => {
  const warp = _warp;
  const contract = warp.contract(contractTxId).connect("use_wallet");
  await contract.writeInteraction({ function: "delete", id: id });
  useRedirect.setState({ location: "register" });
};
export default _delete;
