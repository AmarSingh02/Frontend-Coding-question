import React, { useContext } from "react";

import { AuthContext } from "../AuthContext/AuthContext";

import { Navigate } from "react-router";


const UseAuthGuard = ({ children}) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user)
   if (loading) return <div>Loading...</div>;
  return  user && user.role=="user"?children:<Navigate to="/"/>
};

export default UseAuthGuard;
