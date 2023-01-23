import {
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import useFiled from "../store/useFiled";
export default function AAlert() {
  const setError = useFiled((state) => state.setError);
  const error = useFiled((state) => state.error);
  return (
    <>
      <Box>
        <Alert status="warning">
          <AlertIcon />
          <Box>
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Box>
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={() => setError(undefined)}
          />
        </Alert>
      </Box>
    </>
  );
}
