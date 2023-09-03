import SectionHeader from "./utilities/SectionHeader";
import { useState } from "react";
import SkillBar from "./utilities/SkillBar";
import SkillInfo from "./interfaces/SkillInfo";

const Skills = () => {
  const [skillBars, _setSkillBars] = useState([
    { name: "JavaScript", percentage: 85 },
    { name: "Angular", percentage: 90 },
    { name: "React", percentage: 60 },
    { name: "HTML/CSS", percentage: 90 },
    { name: "C#.NET", percentage: 85 },
    { name: "VB.NET", percentage: 85 },
    { name: "MS SQL Server", percentage: 80 },
    { name: "RxJS", percentage: 70 },
  ]);
  return (
    <div className="relative bg-blue-100 text-black font-raleway w-full text-xl pl-10 pr-10">
      <SectionHeader>Skills</SectionHeader>
      <p className="italic mb-2 text-lg">
        My skills are predominantly with web-based frameworks. These are some of
        the tools I employ every day.
      </p>
      <p className="italic mb-2 text-lg">
        I don't think I'll ever claim 100% for any one technology. There is
        always something new to learn and its something I very much enjoy about
        the process.
      </p>
      <div className="grid grid-cols-2 gap-4 pt-5 pb-10">
        {skillBars.map((skillBarInfo: SkillInfo, index: number) => (
          <SkillBar key={index} skillInfo={skillBarInfo}></SkillBar>
        ))}
      </div>
    </div>
  );
};

export default Skills;
