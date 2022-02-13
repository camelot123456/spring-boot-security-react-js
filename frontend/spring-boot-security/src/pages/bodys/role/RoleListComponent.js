import React from "react";
import {Link} from 'react-router-dom'

function RoleListComponent(props) {
  const { roles } = props;

  return (
    <>
      <table className="table  table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
            <th scope="col">Tools</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={role.id}>
              <th scope="row">{index + 1}</th>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>{role.code}</td>
              <td className="text-center">
                <Link to={`/role/${role.id}`}>Select</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default RoleListComponent;
