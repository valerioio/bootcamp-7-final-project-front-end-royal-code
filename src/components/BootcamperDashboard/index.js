import List from "../List";
import Input from "../Input";
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
import LogoutButton from "../LogoutButton";
import ReadingListPage from "../ReadingListPage";

export default function BootcamperDashboard({
  handleDelete,
  addListing,
  Listings,
}) {
  return (
    <div>
    <h1>asdf</h1>
      <ReadingListPage />
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
