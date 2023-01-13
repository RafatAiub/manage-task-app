import React from "react";

const MemberTable = ({ data }) => {
  return (
    <tbody>
      <tr>
        <td>{data.numberOfTask}</td>
        <td>{data.assignTo}</td>
      </tr>
    </tbody>
  );
};

export default MemberTable;
