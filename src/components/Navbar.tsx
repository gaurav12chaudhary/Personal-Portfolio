"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 py-4 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Portfolio
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    <Link href="#about" className="hover:text-gray-400 transition-colors">
                        About
                    </Link>
                    <Link href="#skills" className="hover:text-gray-400 transition-colors">
                        Skills
                    </Link>
                    <Link href="#projects" className="hover:text-gray-400 transition-colors">
                        Projects
                    </Link>
                    <Link href="#contact" className="hover:text-gray-400 transition-colors">
                        Contact
                    </Link>
                </div>

                {/* Mobile Navigation Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-sm p-4 flex flex-col space-y-4 shadow-lg">
                    <Link
                        href="#about"
                        className="hover:text-gray-400 transition-colors py-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="#skills"
                        className="hover:text-gray-400 transition-colors py-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Skills
                    </Link>
                    <Link
                        href="#projects"
                        className="hover:text-gray-400 transition-colors py-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        href="#contact"
                        className="hover:text-gray-400 transition-colors py-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar; 