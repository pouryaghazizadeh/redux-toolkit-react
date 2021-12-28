import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
   
    return (
      <div>
        <Link to="/" className={{fontSize:"x-large"}}>
          Home
        </Link>
        <Link to="/todo" className={{}}>
          Todo
        </Link>
        <Link to="/login" className={{}}>
          Login
        </Link>
        <Link to="/sign-in">Register</Link>
      </div>
    );
}

export default Navbar
