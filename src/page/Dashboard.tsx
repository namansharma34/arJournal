import { useEffect } from "react";
import NavBar from "../component/NavBar";
import useFiled from "../store/useFiled";
import useWallet from "../store/useWallet";
import { useNavigate } from "react-router-dom";
import { Wrap, WrapItem, Box } from "@chakra-ui/react";
import Form from "./Form";
import TTable from "./Table";
export default function Dashboard() {
  const navigate = useNavigate();
  const setError = useFiled((state) => state.setError);
  const address = useWallet((state) => state.address);
  const connection = useWallet((state) => state.connection);
  useEffect(() => {
    setError(undefined);
    if (!address?.length && !connection) {
      setError("Please Connect Arweave Account First");
      navigate("/");
    }
  }, []);
  return (
    <>
      <NavBar name="Home" />
      <Wrap>
        <WrapItem>
          <Box>
            <Form />
          </Box>
        </WrapItem>
        <WrapItem>
          <TTable />
        </WrapItem>
      </Wrap>
    </>
  );
}
