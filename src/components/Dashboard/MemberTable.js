import React from "react";

const MemberTable = ({ data }) => {
  return (
    <tbody>
      <tr>
        <td>{data.assignTo}</td>
        <td>{data.numberOfTask}</td>
        <td>
          <button className="btn btn-outline btn-info">update</button>
        </td>
        <td>
          <button className="btn btn-outline btn-warning">delete</button>
        </td>
      </tr>
    </tbody>
  );
};

export default MemberTable;
