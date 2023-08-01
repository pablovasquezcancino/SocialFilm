import React from 'react';
import { useAuth } from '../context/authContext';


const Logout = () => {
    const {Logout, isAuthenticated} = useAuth();

  return (
    <div>Logout</div>
  )
}

export default Logout