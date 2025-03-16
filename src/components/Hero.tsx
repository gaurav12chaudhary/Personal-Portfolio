import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 md:px-12">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Hi, I'm <span className="text-blue-500">Gaurav Chaudhary</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
                        Web Developer & Software Engineer
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
                        I build beautiful, responsive websites and applications with modern technologies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="#projects"
                            className="rounded-full bg-foreground text-background hover:bg-blue-600 transition-colors py-3 px-8 text-center font-medium"
                        >
                            View My Work
                        </Link>
                        <Link
                            href="#contact"
                            className="rounded-full border border-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors py-3 px-8 text-center font-medium"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500">
                        {/* Replace with your own image */}
                        <Image
                            src="/profile-placeholder.jpeg"
                            alt="Gaurav Chaudhary"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <Link href="#about" aria-label="Scroll down">
                    <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </Link>
            </div>
        </section>
    );
};

export default Hero; 