// import React, { createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   const login = (userData) => {
//     setUser(userData);
//     navigate("/admin/dashboard");
//   };

//   const logout = () => {
//     setUser(null);
//     navigate("/sign-in");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
