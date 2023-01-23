import { Box, Flex, Image } from "@chakra-ui/react";
import { FaGithub, FaDiscord } from "react-icons/fa";
const Footer = () => (
  <Box bottom={0} left={0} right={0} bg="transparent" p={4} width="100%">
    <Flex justifyContent="space-between" alignItems="center">
      <Box paddingLeft={"5"} paddingTop={"10"}>
        <FaGithub size={"30px"} color="black" />
      </Box>
      <Box>
        <Image
          src="https://6nlsovk34tsk2qp66xvs5zb2m65nyzu4tiygc5rtyzgz64mheeca.arweave.net/81cnVVvk5K1B_vXrLuQ6Z7rcZpyaMGF2M8ZNn3GHIQQ"
          boxSize={"100px"}
        />
      </Box>
      <Box paddingRight={"5"} paddingTop={"10"}>
        <FaDiscord size={"30px"} color="black" />
      </Box>
    </Flex>
  </Box>
);

export default Footer;
