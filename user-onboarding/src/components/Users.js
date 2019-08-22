import React from "react";

const Users = ({ users }) => {
  return (
    <div className="user-wrapper">
      {users.map((user, key) => {
        console.log(user);
        const { username, email, password, terms } = user;
        return (
          <div key={key} className="user">
            <h1>username: {username}</h1>
            <p>email: {email}</p>
            <p>password: {password}</p>
            <p>terms: {terms}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
