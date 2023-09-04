import React, { useContext } from "react";
import ChildC from "./ChildC";
import { FirstName, LastName } from "./App";

export default function ChildB() {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <>
      <h1>
        My name is {fname} {lname}{" "}
      </h1>
    </>
  );
}
