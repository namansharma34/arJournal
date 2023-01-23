import { ArweaveWebWallet } from "arweave-wallet-connector";
import useWallet from "../store/useWallet";
const wallet = new ArweaveWebWallet({
  name: "arJournal",
  logo: 'image.svg',
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
      window.location.reload();
    }
  }
};
