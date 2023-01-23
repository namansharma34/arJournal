import { ChakraProvider } from "@chakra-ui/react";
import Search from "./page/Search";
import Dashboard from "./page/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./component/Footer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <Search />,
  },
]);
const App = () => {
  return (
    <>
      <ChakraProvider>
        <RouterProvider router={router} />
        <Footer />
      </ChakraProvider>
    </>
  );
};
export default App;
