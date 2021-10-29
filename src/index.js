import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-7plt54d0.us.auth0.com"
      clientId="LFFuAUe4cWdCiHRc7XeYepZoua3TP8Tr"
      redirectUri={`${window.location.origin}/home`}
    >
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
