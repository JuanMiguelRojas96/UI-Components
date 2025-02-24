import React from "react";
import { TableInfoContainer, TableInfoHeader } from "./TableInfo.style";

interface TableInfoProps {
  title: string;
}

const TableInfo = ({ title }: TableInfoProps) => {
  return (
    <TableInfoContainer>
      <TableInfoHeader>
        <h2>{title}</h2>
      </TableInfoHeader>
      <table>
        <thead>
          <tr>
            <th>Columna 1</th>
            <th>Columna 2</th>
            <th>Columna 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
            <td>Dato 3</td>
          </tr>
        </tbody>
      </table>
      </TableInfoContainer>
  );
};

export default TableInfo;
