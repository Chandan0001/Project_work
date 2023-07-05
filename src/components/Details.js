import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default function Details() {


  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };


  return (
    <div>

<Navbar getUsers={getUsers}></Navbar>
        <div className="grid-container">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          users.map((user) => (
            <div className="grid-item" key={user.id}>
              <img src={user.avatar} alt={user.email} />
              <div>{`${user.first_name} ${user.last_name}`}</div>
              <div>{user.email}</div>
            </div>
          ))
        )}
      </div>

      

    </div>
  )
}
