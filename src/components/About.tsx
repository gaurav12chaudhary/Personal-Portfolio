const About = () => {
    return (
        <section id="about" className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-blue-500">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Who I Am</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            I'm a passionate web developer with a strong focus on creating beautiful,
                            functional, and user-friendly websites. With a background in design and
                            programming, I bring a unique perspective to every project.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            I enjoy solving complex problems and turning ideas into reality through
                            elegant code. My goal is to build applications that not only look great
                            but also provide an exceptional user experience.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">My Journey</h3>
                        <div className="space-y-4">
                            <div className="border-l-4 border-blue-500 pl-4 py-2">
                                <h4 className="font-bold">Education</h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Bachelor&apos;s of Technology<br />
                                    ABES ENGINEERING COLLEGE, 2020-2024
                                </p>
                            </div>

                            <div className="border-l-4 border-blue-500 pl-4 py-2">
                                <h4 className="font-bold">Work Experience</h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Frontend Developer Intern<br />
                                    HSV Digital, October 2024 - Present
                                </p>
                            </div>

                            <div className="border-l-4 border-blue-500 pl-4 py-2">
                                <h4 className="font-bold">Freelance</h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Web Developer & Designer<br />
                                    2024-Present
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 