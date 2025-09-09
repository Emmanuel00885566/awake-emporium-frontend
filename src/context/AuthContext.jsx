// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // mock signup
  const signup = (name, email, password) => {
    const newUser = { name, email };
    setUser(newUser);
    localStorage.setItem("authUser", JSON.stringify(newUser));
    return true;
  };

  // mock login
  const login = (email, password) => {
    const loggedInUser = { name: email.split("@")[0], email };
    setUser(loggedInUser);
    localStorage.setItem("authUser", JSON.stringify(loggedInUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
