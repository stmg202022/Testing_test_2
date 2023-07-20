//
import { GreetProps } from "./greet.type";

const Greet = (props: GreetProps) => {
  return <div>Hello {props.name ? props.name : "Guest"}</div>;
};

export default Greet;
