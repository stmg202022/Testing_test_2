import { SkillsProps } from "./skills.types";

import React, { useState } from "react";

export const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isloggedIn, setIsloggedIn] = useState(false);

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
