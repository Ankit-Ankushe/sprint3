import React, { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token,setToken] = useState("")

  const value = {
    token,
    setToken
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
