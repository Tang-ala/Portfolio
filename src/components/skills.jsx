import React from "react";

const skills = [
  "HTML5",
  "CSS3 / Tailwind",
  "React",
  "Express js",
  "Git & GitHub",
  "Spring Boot",
  "Flutter",
  "MySQL",
  "PostgreSQL",
  "SQLite",
  "UML",
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold mb-8 text-center">
          Compétences
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full shadow-sm text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
