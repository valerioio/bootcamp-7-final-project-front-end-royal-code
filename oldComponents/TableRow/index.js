import React from "react";
import { v4 as uuidv4 } from 'uuid'

const TableRow = ({ data }) => {
    return (
        <tr>
            {data.map((item) => {
                return <td key={uuidv4()}>{item}</td>;
            })}
        </tr>
    );
};

export default TableRow;