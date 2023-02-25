import React from "react";
import "./index.css";
import Instructions from "./Instructions";
import Tabs from "./Tabs";

export default function App() {
  return (
    <div className="App">
      <Instructions />
      <div className="block">Import your components here</div>
      <Tabs />
    </div>
  );
}
