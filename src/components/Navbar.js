import React from 'react'

export default function Navbar({ getUsers }) {


  return (
    <div>
        <nav className="navbar">
        <div className="brand">AirData</div>
        
        <button className="get-users-button" onClick={getUsers}>
          Get Users
        </button>
      </nav>
    </div>
  )
}
