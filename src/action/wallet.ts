import { ArweaveWebWallet } from "arweave-wallet-connector";
import { redirect } from "react-router-dom";
import useRedirect from "../store/useRedirect";
import useWallet from "../store/useWallet";
const wallet = new ArweaveWebWallet({
  name: "arJournal",
  logo: "https://muuptphz7uqzpuriuqg4ec5c277fjfbw6exnfm3naybsgdmu56va.arweave.net/ZSj5vPn9IZfSKKQNwgui1_5UlDbxLtKzbQYDIw2U76o",
});

export const connect = async () => {
  wallet.setUrl("https://arweave.app");
  if (!useWallet.getState().address && !useWallet.getState().connection) {
    await wallet.connect();
  }
  if (wallet.address?.length && wallet.connected) {
    useWallet.getState().setAddress(wallet.address);
    useWallet.getState().setConnection(true);
  }
};
export const disconnect = async () => {
  if (
    wallet.connected &&
    wallet.address &&
    useWallet.getState().address?.length &&
    useWallet.getState().connection
  ) {
    await wallet.disconnect();
    if (!wallet.connected && !wallet.address) {
      useWallet.setState({ address: undefined });
      useWallet.setState({ connection: false });
      useRedirect.setState({ location: "disconnect" });
    }
  }
};
