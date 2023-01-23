import { LoggerFactory, WarpFactory } from "warp-contracts";
export default async function config() {
  const warp = WarpFactory.forMainnet();
  if (await warp.arweave.network.getInfo()) {
    LoggerFactory.INST.logLevel("info");
    return true;
  } else {
    throw new Error("Couldnot connect with Arweave Network");
  }
}
export const _warp = WarpFactory.forMainnet();
export const contractTxId = "jTBD_zoRFd53OScb1cm_UvrP3sNJPAJMr2nFj2ZFuAc";
export type DB = Array<{
  id: string;
  header: string;
  uploader: string;
  subject: string;
  time: string;
  author: string;
  version: number;
  version_txn_history: Array<string>;
}>;
