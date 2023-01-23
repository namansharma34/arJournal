import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaLink } from "react-icons/fa";
import useSearchData from "../store/useSearchData";
export default function Result() {
  const [open, setOpen] = useState(true);
  const data = useSearchData((state) => state.db);
  const sset = useSearchData((state) => state.setDB);
  const { onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={open} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Result</ModalHeader>
          <ModalCloseButton
            onClick={() => {
              setOpen(false);
              sset(undefined);
            }}
          />
          <ModalBody>
            <TableContainer>
              <Table variant="striped" colorScheme="blue">
                <Thead>
                  <Tr>
                    <Th>Date</Th>
                    <Th>Header</Th>
                    <Th>Author</Th>
                    <Th>Link</Th>
                  </Tr>
                  {data === false
                    ? null
                    : data?.map((e, i) => (
                        <Tr key={i}>
                          <Th key={i + 1}>
                            {String(
                              new Date(parseInt(e.time) * 1000).toLocaleString()
                            )}
                          </Th>
                          <Th key={i + 2}>{e.header}</Th>
                          <Th key={i + 3}>{e.author}</Th>
                          <Th key={i + 4}>
                            <a
                              href={`https://arweave.net/${e.id}`}
                              target="_blank"
                            >
                              <FaLink color="green" />
                            </a>
                          </Th>
                        </Tr>
                      ))}
                </Thead>
              </Table>
            </TableContainer>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setOpen(false);
                sset(undefined);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
