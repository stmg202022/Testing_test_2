import React from "react";
import "./App.css";
// import { Application } from "./component/application/application";
// import { Skills } from "./component/skills/skills";
// import Practise from "./component/practise/practise";
import Greet from "./component/greet/greet";
import { Counter } from "./component/counter/counter";

import { AppProviders } from "./providers/app_providers";
import { MuiMode } from "./component/mui/mui_mode";
import { CounterTwo } from "./component/counter-two/counter-two";

function App() {
  // const skills = ["html", "css", "js"];
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={skills} /> */}
        {/* <Practise /> */}
        <Greet name="samson" />
        <Counter />
        <MuiMode />
        <CounterTwo count={0} />
      </div>
    </AppProviders>
  );
}

export default App;
