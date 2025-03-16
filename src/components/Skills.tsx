const Skills = () => {
    const frontendSkills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 85 },
    ];

    const backendSkills = [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "SQL", level: 60 },
        { name: "Firebase", level: 70 },
        { name: "REST API", level: 80 },
    ];

    const otherSkills = [
        { name: "Git", level: 85 },
        { name: "UI/UX Design", level: 75 },
        { name: "Responsive Design", level: 90 },
        { name: "Testing", level: 65 },
        { name: "Performance Optimization", level: 70 },
        { name: "SEO", level: 60 },
    ];

    const SkillBar = ({ name, level }: { name: string; level: number }) => (
        <div className="mb-6">
            <div className="flex justify-between mb-1">
                <span className="font-medium">{name}</span>
                <span className="text-sm text-gray-500">{level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    );

    return (
        <section id="skills" className="py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-blue-500">Skills</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-6 text-center">Frontend</h3>
                        {frontendSkills.map((skill) => (
                            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                        ))}
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-6 text-center">Backend</h3>
                        {backendSkills.map((skill) => (
                            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                        ))}
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-6 text-center">Other</h3>
                        {otherSkills.map((skill) => (
                            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills; 