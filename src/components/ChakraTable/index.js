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
import css from "./Chakra.module.css";
import { v4 as uuidv4 } from "uuid";

export default function ChakraTable({ title, columnHeaders, data }) {
  let dividedData = [];
  const rows = data.length/columnHeaders.length;
  for(let i = 0; i<data.length; i+= columnHeaders.length){
    dividedData.push(data.slice(i,i+columnHeaders.length))
  }
  console.log('asdf',dividedData)

  return (
    <div>
      <Table variant="striped" size="lg" colorScheme="blackAlpha">
        {/* <TableCaption>{title}</TableCaption> */}
        <Thead>
          <Tr>
            {columnHeaders.map((header) => {
              return (
                <Th key={uuidv4()}>
                  <div className={css.Header}>{header}</div>
                </Th>
              );
            })}
          </Tr>{" "}
        </Thead>
        <Tbody className={css.Bodycontainer}>
          {dividedData.map((item, i) => {
            return (
              <Tr key={uuidv4()}>
                {item.map((person) => {
                  return <Td key={uuidv4()}>{person.firstName}</Td>;
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
}
