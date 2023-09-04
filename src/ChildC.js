import React from "react";
import { FirstName } from "./App";

export default function ChildC() {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return <h1>Myself {fname}</h1>;
        }}{" "}
      </FirstName.Consumer>
    </>
  );
}
