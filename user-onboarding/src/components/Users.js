import React from "react";

const Users = props => {
  const { users, setUsers } = props;
  return (
    <>
      <h1>Users</h1>
      <div className="user-wrapper">
        {users.map((user, key) => {
          const { username, email, password, role } = user;
          return (
            <div
              onDoubleClick={e => {
                e.preventDefault();
                console.log(e.target);
              }}
              key={key}
              className="user"
            >
              <h2>{username}</h2>
              <p>
                <strong>email:</strong> {email}
              </p>
              <p>
                <strong>role:</strong> {role}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Users;
