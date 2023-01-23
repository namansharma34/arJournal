import { Box, Flex, Button } from "@chakra-ui/react";
import { connect, disconnect } from "../action/wallet";
import { useNavigate } from "react-router-dom";
import useWallet from "../store/useWallet";
const NavBar = ({ name }: { name: "Home" | "Dashboard" }) => {
  const connection = useWallet((state) => state.connection);
  const address = useWallet((state) => state.address);
  const navigate = useNavigate();
  return (
    <>
      <Flex bg="white" p={4} alignItems="center">
        <Box ml="auto">
          {address?.length && connection ? (
            <>
              <Button
                size="md"
                mr={2}
                colorScheme="teal"
                variant="solid"
                onClick={() => navigate(name === "Home" ? "/" : "/dashboard")}
              >
                {name}
              </Button>
              <Button
                size="md"
                colorScheme="teal"
                variant="solid"
                onClick={() => disconnect()}
              >
                Disconnect
              </Button>
            </>
          ) : (
            <Button
              size="md"
              colorScheme="teal"
              variant="solid"
              onClick={() => connect()}
            >
              Connect
            </Button>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default NavBar;
