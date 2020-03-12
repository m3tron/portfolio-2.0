import React from "react";

export default ({ skill, key }) => {
  return (
    <div className="skillCard" key={key}>
      <img
        className="skills"
        src={`https://cdn.svgporn.com/logos/${skill}.svg`}
        alt={skill}
      />
      {/* <div>
        <span className="skillTitle">{skill}</span>
      </div> */}
    </div>
  );
};
