
import React, { useContext } from "react";

import { AuthContext } from "../AuthContext/AuthContext";

import { Navigate } from "react-router";


const UseAdminAuthGuard = ({ children}) => {
  const { user,loading } = useContext(AuthContext);

  //  if (loading) return <div>Loading...</div>;
return user && user.role=="admin"?{children}:<Navigate to="/"/>
};

export default UseAdminAuthGuard;