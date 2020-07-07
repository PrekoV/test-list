import React from "react";
import "./Button.scss"

export default function Button({ children }) {
  return <button className="green-button px-4 pt-2 pb-2">{children}</button>;
}
