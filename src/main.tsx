import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import customTheme from "../theme";

const { colors } = customTheme();
const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
