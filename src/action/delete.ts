import { contractTxId, _warp } from "../utils/config";

const _delete = async (id: string) => {
  const warp = _warp;
  const contract = warp.contract(contractTxId).connect("use_wallet");
  await contract.writeInteraction({ function: "delete", id: id });
  window.location.reload();
};
export default _delete;
