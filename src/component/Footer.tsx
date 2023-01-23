import { Box, Flex, Image } from "@chakra-ui/react";
import { FaGithub, FaDiscord } from "react-icons/fa";
const Footer = () => (
  <Box bottom={0} left={0} right={0} bg="transparent" p={4} width="100%">
    <Flex justifyContent="space-between" alignItems="center">
      <Box paddingLeft={"5"} paddingTop={"10"}>
        <FaGithub size={"30px"} color="black" />
      </Box>
      <Box>
        <Image src='perma.svg' boxSize={"100px"} />
      </Box>
      <Box paddingRight={"5"} paddingTop={"10"}>
        <FaDiscord size={"30px"} color="black" />
      </Box>
    </Flex>
  </Box>
);

export default Footer;
