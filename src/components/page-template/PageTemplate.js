import React from "react";
import Header from "../header/Header";

export default function PageTemplate(props) {
  return (
    <>
      <Header></Header>
      {props.children}
    </>
  );
}
