import React from "react";

const Users = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
      <div className="user-wrapper">
        {users.map((user, key) => {
          const { username, email, password, role } = user;
          return (
            <div key={key} className="user">
              <h2>{username}</h2>
              <p>
                <bold>email:</bold> {email}
              </p>
              <p>
                <bold>role:</bold> {role}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Users;
