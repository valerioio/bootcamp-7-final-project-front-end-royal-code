import { useState, useEffect } from "react";
import List from "../List";
import Input from "../Input";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import CSS from "./App.module.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log("App rerender");
  const [Listings, setListings] = useState(["hello", "world"]);

  useEffect(() => {
    document.title = `(${Listings.length}) things to do...`;
  }, [Listings]);

  // Plan: Create a fetch to the backend on page initialisation to get data for lists
  // Wrap in useEffect, [] dependency
  // async function, await fetch to endpoints
  // res.json returned data
  // call function
  /*
  useEffect(() => {
    async function getAllData() {
      const energiserResponse = await fetch(
        "https://xsfe9i5ech.execute-api.eu-west-1.amazonaws.com/dev/energisers"
      );
      const bootcamperResponse = await fetch(
        "https://xsfe9i5ech.execute-api.eu-west-1.amazonaws.com/dev/bootcampers"
      );
      const resourceResponse = await fetch(
        "https://xsfe9i5ech.execute-api.eu-west-1.amazonaws.com/dev/resources"
      );

      const energiserData = await energiserResponse.json();
      const bootcamperData = await bootcamperResponse.json();
      const resourceData = await resourceResponse.json();
      console.log(energiserData, bootcamperData, resourceData);
      return [energiserData, bootcamperData, resourceData];
    }
    const allData = getAllData();
    console.log(allData);
    return allData;
  }, []);
*/
  function handleDelete(i) {
    console.log("%chandle delete", "color:lightblue");
    setListings([...Listings.slice(0, i), ...Listings.slice(i + 1)]);
  }

  function addListing(text) {
    console.log("%cadd  listing ", "color:lightgreen");
    setListings([...Listings, text]);
  }

  return (
    <div className={CSS.App}>
      {user?.email === "coach@schoolofcode.co.uk" ? <p>Hi coach</p> : null}
      {user?.email === "bootcamper@schoolofcode.co.uk" ? (
        <p>Hi bootcamper</p>
      ) : null}
      <h1>My list...</h1>
      <LoginButton />
      <LogoutButton />
      <Input onData={addListing} />
      <List Listings={Listings} handleDelete={handleDelete} />
      <Table variant="simple">
        <TableCaption>Bootcamper Names</TableCaption>
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>Second Name</Th>
          </Tr>{" "}
        </Thead>
        <Tbody>
          <Tr>
            <Td>name</Td>
            <Td>name</Td>
          </Tr>
          <Tr>
            <Td>name</Td>
            <Td>name</Td>
          </Tr>
          <Tr>
            <Td>name</Td>
            <Td>name</Td>
          </Tr>
          <Tr>
            <Td>name</Td>
            <Td>name</Td>
          </Tr>
          <Tr>
            <Td>name</Td>
            <Td>name</Td>
          </Tr>
          <Tr>
            <Td>name</Td>
            <Td>name</Td>
          </Tr>
          <Tr>
            <Td>name</Td>
            <Td>name</Td>
          </Tr>
          <Tr>
            <Td>name</Td>
            <Td>name</Td>
          </Tr>
          <Tr>
            <Td>name</Td>
            <Td>name</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>First Name</Th>
            <Th>Second Name</Th>
          </Tr>
        </Tfoot>
      </Table>
    </div>
  );
}

export default App;
