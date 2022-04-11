import React from "react";
import api from "../api" ;
import { useState } from 'react';
import SearchStatus from "./searchStatus";
import User from "./user"


const Users = ({users, ...rest}) => {

const quantityOfUsers = users.length;


const handleDelete = (userId) => {
setUsers(prevState => prevState.filter(td => td._id !== userId));
}
return (
<>
  <SearchStatus />
  {users.length > 0 &&
  <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценка</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) =>
      <User key={user._id} {...user} {...rest} />
      )}
    </tbody>
  </table>
  }
</>
)
}
export default Users;