// Plan
// creat a flexuble chackra table component
// takes in number of rows and data

// import react
// import chackra components
//export default component Chakra table

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export default function ChakraTable({ title, columnHeaders, data }) {
  let dividedData = [];
  let c = 0;
  let rows = data.length / columnHeaders.length;
  for (let i = 0; i < data.length / columnHeaders.length; i++) {
    dividedData[i] = data.slice(c, c + rows);
    c = c + rows;
  }

  console.log(dividedData);
  return (
    <div>
      <Table variant="simple">
        <TableCaption>{title}</TableCaption>
        <Thead>
          <Tr>
            {columnHeaders.map((header) => {
              return <Th>{header}</Th>;
            })}
          </Tr>{" "}
        </Thead>
        <Tbody>
          {dividedData.map((item, i) => {
            return (
              <Td>
                {item.map((person) => {
                  return (
                    <Tr>
                      {person.firstName} {person.lastName}
                    </Tr>
                  );
                })}
              </Td>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
}
