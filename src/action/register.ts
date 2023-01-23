import { redirect } from "react-router-dom";
import useFiled from "../store/useFiled";
import useRedirect from "../store/useRedirect";
import useRegister from "../store/useRegister";
import { contractTxId, _warp } from "../utils/config";
const register = async () => {
  const header = useRegister.getState().header;
  const author = useRegister.getState().author;
  const subject = useRegister.getState()._subject;
  const file = useRegister.getState().file;
  const setError = useFiled.getState().setError;
  const setUploading = useRegister.getState().setUploading;
  setError(undefined);
  if (header.length && author.length && subject.length && file?.length) {
    setUploading(true);
    const warp = _warp;
    const contract = warp.contract(contractTxId).connect("use_wallet");
    let transaction = await warp.arweave.createTransaction(
      {
        data: file,
      },
      "use_wallet"
    );
    transaction.addTag("Content-Type", "application/pdf");
    await warp.arweave.transactions.sign(transaction, "use_wallet");
    if (transaction.id) {
      const txn = await contract.writeInteraction({
        function: "register",
        header: header,
        subject: subject,
        id: transaction.id,
        author: author,
      });
      if (txn?.originalTxId.length) {
        console.log("You have register");
        console.log(txn.originalTxId);
      }
      let uploader = await warp.arweave.transactions.getUploader(transaction);
      while (!uploader.isComplete) {
        await uploader.uploadChunk();
      }
      setUploading(false);
      useRedirect.setState({ location: "register" });
    }
  } else {
    setError("Some Fileds Are Missing");
  }
};
export default register;
