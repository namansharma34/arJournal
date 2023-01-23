import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableContainer,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import _delete from "../action/delete";
import get from "../action/get";
import useData from "../store/useData";
export default function TTable() {
  useEffect(() => {
    get().then();
  }, []);
  const data = useData((state) => state.db);
  return (
    <>
      <Box paddingTop={"5"}>
        <Heading as="h2" size="lg" mb={5} paddingLeft={"5"}>
          Your Journal
        </Heading>

        <TableContainer borderWidth={"thick"} paddingTop={"4"}>
          <Table variant={"striped"} borderWidth={"thick"}>
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Header</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data === false ? (
                <Heading as="h2" size="lg" paddingLeft={"10"}>
                  Register Your First Journal
                </Heading>
              ) : data?.length ? (
                data.map((e, i) => (
                  <Tr key={i}>
                    <Th key={i + 1}>
                      {String(
                        new Date(parseInt(e.time) * 1000).toLocaleString()
                      )}
                    </Th>
                    <Th key={i + 2}>{e.header}</Th>
                    <Th>
                      <Button
                        key={i + 3}
                        colorScheme="red"
                        onClick={() => _delete(e.id)}
                      >
                        Delete
                      </Button>
                    </Th>
                  </Tr>
                ))
              ) : null}
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
