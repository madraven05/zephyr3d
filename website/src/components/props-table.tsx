import { propsTableData } from "@/utils/data";
import React from "react";

interface PropsTableProps {
  component: string;
}

const PropsTable: React.FC<PropsTableProps> = ({ component }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Prop</th>
          <th>
            Description
          </th>
          <th>Type</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        {propsTableData[component].map((item) => (
          <tr>
            <td><code>{item.prop}</code></td>
            <td>{item.description}</td>
            <td><code>{item.type}</code></td>
            <td>{item.default}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PropsTable;
