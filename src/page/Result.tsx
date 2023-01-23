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
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useState } from "react";
import useData from "../store/useData";
export default function Result() {
  const [open, setOpen] = useState(true);
  const data = useData((state) => state.db);
  const { onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={open} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Result</ModalHeader>
          <ModalCloseButton onClick={() => setOpen(false)} />
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
                              <svg
                                aria-hidden="true"
                                fill="none"
                                stroke="green"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </a>
                          </Th>
                        </Tr>
                      ))}
                </Thead>
              </Table>
            </TableContainer>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
