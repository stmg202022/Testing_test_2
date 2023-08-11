//
import { useState } from "react";
import { GreetProps } from "./greet.types";

const Greet = (props: GreetProps) => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Hello {props.name ? props.name : "Guest"}</h1>

      <div>
        <form action="">
          <label htmlFor="Name:" />
          <input type="text" value="Name.." />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Greet;
