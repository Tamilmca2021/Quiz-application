/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react";
import { useState } from "react";

export type AuthContextType = {
  isUserAuthenticated: () => boolean;
  login: (user: AuthUser) => void;
  getUser: () => AuthUser | null;
};
export type AuthUser = {
  token: string;
  id: string;
  firstName: string;
  role: string;
  lastName: string;
};

// Create an authentication context using React's createContext
export const AuthContext = createContext<AuthContextType | null>(null);

// Define AuthProvider component to manage authentication state
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  // Function to handle user login and store user data in local storage
  const login = (data: AuthUser) => {
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
    localStorage.setItem("token", data.token);
    localStorage.setItem("id", data.id);
    localStorage.setItem("role", data.role);
    setUser(data);
  };
  // Function to get the current user
  const getUser = () => user;

  const isUserAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    return true;
  };

  // Provide authentication context values to child components
  return (
    <AuthContext.Provider value={{ login, getUser, isUserAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
