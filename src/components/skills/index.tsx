import React from "react";

// Import your data arrays
import {
  ProgrammingLanguagesArrayList,
  BackendTechnologiesArrayList,
  FrontendTechnologiesArrayList,
  DatabaseArrayList,
  OtherSkillsArrayList,
} from "../../data/SkillsContent"; // Adjust path based on your folder

import './style.css'


type Skill = {
  id: string;
  name: string;
  image_url: string;
};

interface SkillGroupProps {
  title: string;
  items: Skill[];
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, items }) => (
  <section className="skill__container" >
    <h2 className="skill__title ">{title}</h2>
    <div className="skill__list">
      {items.map((skill) => (
        <div key={skill.id} className="skill__item" >
          <img className="skill__img"
            src={skill.image_url}
            alt={skill.name}
         />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

const SkillsSection = () => {
  return (
    <div className="skill__group__list">
      <SkillGroup title="Programming Languages" items={ProgrammingLanguagesArrayList} />
      <SkillGroup title="Backend Technologies" items={BackendTechnologiesArrayList} />
      <SkillGroup title="Frontend Technologies" items={FrontendTechnologiesArrayList} />
      <SkillGroup title="Databases" items={DatabaseArrayList} />
      <SkillGroup title="Tools & Other Skills" items={OtherSkillsArrayList} />
    </div>
  );
};

export default SkillsSection;
