import {
  Box,
  VStack,
  Input,
  Image,
  Text,
  useBreakpointValue,
  RadioGroup,
  Stack,
  Radio,
  Select,
  Button,
  HStack,
  Heading,
} from "@chakra-ui/react";
import subject from "../utils/subject";
import useFiled from "../store/useFiled";
import search from "../action/search";
import AAlert from "../component/Alert";
import NavBar from "../component/NavBar";
import Result from "./Result";
import useSearchData from "../store/useSearchData";
export default function Search() {
  const text = useFiled((state) => state.text);
  const setText = useFiled((state) => state.setText);
  const Subject = useFiled((state) => state.subject);
  const setSubject = useFiled((state) => state.setSubject);
  const filed = useFiled((state) => state.filed);
  const setFiled = useFiled((state) => state.setFiled);
  const width = useBreakpointValue({ base: "70vw", md: "50vw", lg: "30vw" });
  const error = useFiled((state) => state.error);
  const db = useSearchData((state) => state.db);
  const searching = useFiled((state) => state.searching);
  return (
    <>
      <NavBar name="Dashboard" />
      <Box w="100%" h="75vh" alignItems="center" justifyContent="center">
        <VStack spacing="10" align="center" h="75vh">
          <Box bg="transparent" display="flex" alignItems="center">
            <Image
              src="https://muuptphz7uqzpuriuqg4ec5c277fjfbw6exnfm3naybsgdmu56va.arweave.net/ZSj5vPn9IZfSKKQNwgui1_5UlDbxLtKzbQYDIw2U76o"
              alt="logo"
              width="80px"
              height="80px"
            />
            <Text ml={5} fontSize="xx-large" color="black" paddingLeft={"-20"}>
              arJournal
            </Text>
          </Box>
          <Box>
            <Input
              placeholder="#Search Here"
              size="lg"
              w={width}
              borderColor="blue.500"
              borderWidth={"thin"}
              value={text}
              onChange={(e) => setText(e.currentTarget.value)}
            />
          </Box>
          <Box>
            <RadioGroup onChange={setFiled} value={filed}>
              <Stack direction="row">
                <Radio value="header" size={"lg"}>
                  Header
                </Radio>
                <Radio value="author" size={"lg"}>
                  Author
                </Radio>
                <Radio value="wallet" size={"lg"}>
                  Wallet
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box>
            <HStack>
              <Select
                variant="filled"
                onChange={(e) => setSubject(e.currentTarget.value)}
                value={Subject}
              >
                <option value="all">All</option>
                {subject.map((e, i) => (
                  <option value={e} key={i}>
                    {e}
                  </option>
                ))}
              </Select>
              <Button colorScheme="green" size={"lg"} onClick={() => search()}>
                Search
              </Button>
            </HStack>
          </Box>
          {db === false ? (
            <Heading>There is No Data </Heading>
          ) : db?.length ? (
            <Result />
          ) : null}
          {searching ? <Heading>Searching</Heading> : null}
          {error?.length ? <AAlert /> : null}
        </VStack>
      </Box>
    </>
  );
}
