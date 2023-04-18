import React, { useMemo, useState, useContext, useEffect } from "react";
import { getData } from "../services/useLocalStorage";
import Context from "./context";

function Provider({ children }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    cpf: "",
    role: "",
  });

  const contextValue = useMemo(
    () => ({ user, setUser }),
    [user, setUser]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;
