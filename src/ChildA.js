import React from "react";

import { FirstName } from "./App";

export default function ChildA() {
  return (
    <div>
      <FirstName.Consumer>
        {(fname) => {
          return <h1>Myself {fname}</h1>;
        }}{" "}
      </FirstName.Consumer>
    </div>
  );
}
