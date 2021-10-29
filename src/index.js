import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";

console.log(process.env.AUTH0_DOMAIN, AUTH0_DOMAIN)

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENTID}
      redirectUri={`${window.location.origin}/home`}
    >
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
