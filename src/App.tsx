import React from "react";
import "./App.css";
// import { Application } from "./component/application/application";
import { Skills } from "./component/skills/skills";

function App() {
  const skills = ["html", "css", "js"];
  return (
    <div className="App">
      {/* <Application /> */}
      <Skills skills={skills} />
    </div>
  );
}

export default App;
