import React from "react";

export default ({ skill }) => {
  return (
    <div className="skillCard">
      <img
        className="skills"
        src={`https://cdn.svgporn.com/logos/${skill}.svg`}
        alt={skill}
      />
      <div>
        <span className="skillTitle">{skill}</span>
      </div>
    </div>
  );
};
