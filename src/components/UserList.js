import React, { useState } from 'react';

function UserList(){
  
  return (
    <div>
      <h2>User List (Admin)</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                {user.role === 'admin' ? (
                  'Admin'
                ) : (
                  <>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                    <button>Edit</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
