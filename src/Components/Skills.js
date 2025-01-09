import React from "react";
import { Monitor, Server, Lightbulb } from "lucide-react";

function SkillBar({ name, percentage }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-700">{name}</h3>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function SkillSection({ title, icon, experience, skills }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex-1 min-w-[280px]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="text-blue-600">{icon}</div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        </div>
        <span className="text-sm text-gray-500">{experience}</span>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const frontendSkills = [
    { name: "HTML", percentage: 70 },
    { name: "CSS", percentage: 80 },
    { name: "JavaScript", percentage: 50 },
    { name: "React, React Native, Next.js", percentage: 80 },
    { name: "Angular", percentage: 40 },
  ];

  const backendSkills = [
    { name: "Firebase", percentage: 65 },
    { name: "Node.js", percentage: 75 },
    { name: "Redux", percentage: 80 },
    { name: "MySQL", percentage: 60 },
    { name: "MongoDB", percentage: 85 },
  ];

  const softSkills = [
    { name: "Problem Solving", percentage: 85 },
    { name: "Canva", percentage: 90 },
    { name: "Figma", percentage: 90 },
  ];

  return (
    <section id="skills" className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Skills</h1>
          <p className="text-gray-600">My technical level</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillSection
            title="Frontend Developer"
            icon={<Monitor size={24} />}
            experience="More than 5 years"
            skills={frontendSkills}
          />

          <SkillSection
            title="Backend Developer"
            icon={<Server size={24} />}
            experience="More than 4 years"
            skills={backendSkills}
          />

          <SkillSection
            title="Soft Skills"
            icon={<Lightbulb size={24} />}
            experience="More than 5 years"
            skills={softSkills}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
