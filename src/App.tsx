import React from "react";
import "./App.css";
// import { Application } from "./component/application/application";
// import { Skills } from "./component/skills/skills";
// import Practise from "./component/practise/practise";
import Greet from "./component/greet/greet";

function App() {
  // const skills = ["html", "css", "js"];
  return (
    <div className="App">
      {/* <Application /> */}
      {/* <Skills skills={skills} /> */}
      {/* <Practise /> */}
      <Greet name="samson" />
    </div>
  );
}

export default App;
