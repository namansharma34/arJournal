import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Box,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import subject from "../utils/subject";
import useRegister from "../store/useRegister";
import register from "../action/register";
import useFiled from "../store/useFiled";
import AAlert from "../component/Alert";
export default function MyForm() {
  const header = useRegister((state) => state.header);
  const setHeader = useRegister((state) => state.setHeader);
  const author = useRegister((state) => state.author);
  const setAuthor = useRegister((state) => state.setAuthor);
  const _subject = useRegister((state) => state._subject);
  const setSubject = useRegister((state) => state.setSubject);
  const setFile = useRegister((state) => state.setFile);
  const uploading = useRegister((state) => state.uploading);
  const width = useBreakpointValue({ base: "90vw", md: "70vw", lg: "50vw" });
  const Error = useFiled((state) => state.error);
  const handleFile = (event: any) => {
    var file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
      //@ts-ignore
      setFile(new Uint8Array(event.target?.result));
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <Box w={width}>
      <Box p={5} shadow="md" borderWidth="1px" rounded="md">
        <Heading as="h2" size="lg" mb={5}>
          Add to arJournal
        </Heading>
        <FormControl>
          <FormLabel>Header</FormLabel>
          <Input
            type="text"
            value={header}
            onChange={(event) => setHeader(event.target.value)}
            borderColor="gray.300"
            focusBorderColor="teal.500"
            rounded="md"
            size="md"
            mb={4}
            disabled={uploading}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Author</FormLabel>
          <Input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            borderColor="gray.300"
            focusBorderColor="teal.500"
            rounded="md"
            size="md"
            mb={4}
            disabled={uploading}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Subject</FormLabel>
          <Select
            value={_subject}
            //@ts-ignore
            onChange={(event) => setSubject(event.target.value)}
            borderColor="gray.300"
            focusBorderColor="teal.500"
            rounded="md"
            size="md"
            mb={4}
            disabled={uploading}
          >
            <option value="all">All</option>
            {subject.map((e, i) => (
              <option value={e} key={i}>
                {e}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <input type="file" onChange={(e) => handleFile(e)} />
        </FormControl>
        <Button
          type="submit"
          colorScheme="teal"
          variant="solid"
          mb={4}
          onClick={() => register().then()}
          marginTop={"3"}
          disabled={uploading}
        >
          Submit
        </Button>
        {uploading ? <Text>Uploading the Data. Wait For a while</Text> : null}
        <Box>{Error?.length ? <AAlert /> : null}</Box>
      </Box>
    </Box>
  );
}
