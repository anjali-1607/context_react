import React, { createContext } from "react";
import "./App.css";
import ChildA from "./ChildA";

const FirstName = createContext();
const LastName = createContext();

export default function App() {
  return (
    <>
      <FirstName.Provider value={"anjali"}>
        <LastName.Provider value={"rajpoot"}>
          <ChildA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}
export { FirstName, LastName };
