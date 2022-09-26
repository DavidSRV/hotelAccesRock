import { createContext, useContext } from "react";
import { useState } from "react";

const Id = createContext("");

export default function IdProvider({ children }) {
  const [id, setId] = useState("");
  const [key, setKey] = useState("")

  return (
    <Id.Provider
      value={{
        id,
        setId,
        key,
        setKey
      }}
    >{children}</Id.Provider>
  );
}

export const useId = () => useContext(Id);
