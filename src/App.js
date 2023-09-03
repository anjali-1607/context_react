import React, { createContext } from "react";
import "./App.css";
import ChildA from "./ChildA";

const FirstName = createContext();

export default function App() {
  return (
    <>
      <FirstName.Provider value={"anjali"}>
        <ChildA />
      </FirstName.Provider>
    </>
  );
}
export { FirstName };
