import React from "react";
import TableRow from "../TableRow";
import TableHeadItem from "../TableHeadItem";
import { v4 as uuidv4 } from 'uuid'

const Table = ({ theadData, tbodyData, customClass,}) => {
    return (
        <table className={customClass}>
            <thead>
                <tr>
                    {theadData? theadData.map((item) => {

                        return <TableHeadItem key={uuidv4()} item={item} />;
                    }): null}
                </tr>
            </thead>
            <tbody>
                {tbodyData? tbodyData.map((item) => {
                    return <TableRow key={uuidv4()} data={item.items} />;
                }): null}
            </tbody>
        </table>
    );
};

export default Table;