import React from "react";
import SkillImage from "./SkillImage";

const Skills = () => {
  const frontend = [
    "html-5",
    "css-3",
    "jquery",
    "javascript",
    "es6",
    "react",
    "redux",
    "handlebars"
  ];
  const backend = [
    "express",
    "nodejs",
    "mongodb",
    "firebase",
    "mysql",
    "sequelize"
  ];
  const styling = ["material-ui", "bootstrap", "semantic-ui", "materializecss"];
  const random = [
    "git",
    "heroku",
    "passport",
    "linux-tux",
    "slack",
    "postman",
    "trello",
    "zenhub"
  ];

  // const generateKey =  => {
  //   return
  // }

  return (
    <div className="gridContainer" id="skills">
      <div className="skillsWrapper">
        {frontend.map(skill => (
          <SkillImage skill={skill} key={frontend.indexOf(skill)} />
        ))}
      </div>
      <div className="skillsWrapper">
        {backend.map(skill => (
          <SkillImage skill={skill} />
        ))}
      </div>
      <div className="skillsWrapper">
        {styling.map(skill => (
          <SkillImage skill={skill} />
        ))}
      </div>
      <div className="skillsWrapper">
        {random.map(skill => (
          <SkillImage skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
