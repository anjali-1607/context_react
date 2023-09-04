import React, { useContext } from "react";
import ChildC from "./ChildC";
import { FirstName } from "./App";

export default function ChildB() {
  const fname = useContext(FirstName);
  return (
    <>
      <h1>My name is {fname}</h1>
    </>
  );
}
