import { SkillsProps } from "./skills.types";

import React, { useEffect, useState } from "react";

export const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isloggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    //
    setTimeout(() => {
      setIsloggedIn(true);
    }, 500);

    //This gives error due to default timeOut: 1000ms //but, set on test: 2000ms makes test pass
    setTimeout(() => {
      setIsloggedIn(true);
    }, 1001);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>

      {isloggedIn ? (
        <button>Start learn</button>
      ) : (
        <button onClick={() => setIsloggedIn(true)}>LOGIN</button>
      )}
    </>
  );
};
