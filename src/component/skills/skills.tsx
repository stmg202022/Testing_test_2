import { SkillsProps } from "./skills.types";

import React from "react";

export const Skills = (props: SkillsProps) => {
  const { skills } = props;

  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </>
  );
};
