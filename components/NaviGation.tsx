"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import GearIcon from "./GearIcon";

interface NavBarProps {
    // Add any props you need here
}

const NaviGation: React.FC<NavBarProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Refs for smooth scrolling
    const aboutRef = useRef<HTMLDivElement>(null);
    const focusRef = useRef<HTMLDivElement>(null);
    const formulaRef = useRef<HTMLDivElement>(null);
    const methodRef = useRef<HTMLDivElement>(null);
    const portfolioRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false); // Close menu after navigating
    };

    return (
        <nav className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center text-white dark:text-gray-200 font-bold">
                    <Link href="/" passHref>
                        <GearIcon className="h-16 w-16 mr-2 cursor-pointer" />
                    </Link>
                    i-Group of Companies
                </div>
                <div className="hidden md:flex space-x-6 items-center">
                    {/* Desktop links */}
                    <a
                        className="text-white dark:text-gray-200 hover:underline px-3 py-2 rounded-md transition-colors duration-300"
                        href="#about"
                        onClick={() => handleLinkClick(aboutRef)}
                    >
                        About Us
                    </a>
                    <a
                        className="text-white dark:text-gray-200 hover:underline px-3 py-2 rounded-md transition-colors duration-300"
                        href="#focus"
                        onClick={() => handleLinkClick(focusRef)}
                    >
                        Our Focus
                    </a>
                    <a
                        className="text-white dark:text-gray-200 hover:underline px-3 py-2 rounded-md transition-colors duration-300"
                        href="#formula"
                        onClick={() => handleLinkClick(formulaRef)}
                    >
                        Formula
                    </a>
                    <a
                        className="text-white dark:text-gray-200 hover:underline px-3 py-2 rounded-md transition-colors duration-300"
                        href="#method"
                        onClick={() => handleLinkClick(methodRef)}
                    >
                        Method
                    </a>
                    <a
                        className="text-white dark:text-gray-200 hover:underline px-3 py-2 rounded-md transition-colors duration-300"
                        href="#portfolio"
                        onClick={() => handleLinkClick(portfolioRef)}
                    >
                        Portfolio
                    </a>
                    <Button
                        className="bg-violet-600 text-white hover:bg-violet-700 border-violet-600 px-4 py-2 rounded-md transition-colors duration-300"
                        variant="outline"
                        onClick={() => handleLinkClick(contactRef)} // Add onClick for contact
                    >
                        Contact Us
                    </Button>
                </div>
                <div className="md:hidden">
                    {/* Mobile menu */}
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" onClick={handleMenuToggle}>
                                <MenuIcon className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col gap-4 p-4">
                                {/* Mobile links */}
                                <a
                                    href="#about"
                                    onClick={() => handleLinkClick(aboutRef)}
                                    className="text-white dark:text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                                >
                                    About Us
                                </a>
                                <a
                                    href="#focus"
                                    onClick={() => handleLinkClick(focusRef)}
                                    className="text-white dark:text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                                >
                                    Our Focus
                                </a>
                                <a
                                    href="#formula"
                                    onClick={() => handleLinkClick(formulaRef)}
                                    className="text-white dark:text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                                >
                                    Formula
                                </a>
                                <a
                                    href="#method"
                                    onClick={() => handleLinkClick(methodRef)}
                                    className="text-white dark:text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                                >
                                    Method
                                </a>
                                <a
                                    href="#portfolio"
                                    onClick={() => handleLinkClick(portfolioRef)}
                                    className="text-white dark:text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                                >
                                    Portfolio
                                </a>
                                <Button
                                    className="bg-violet-600 text-white hover:bg-violet-700 border-violet-600 px-3 py-2 rounded-md text-base font-medium w-full transition-colors duration-300"
                                    variant="outline"
                                    onClick={() => handleLinkClick(contactRef)} // Add onClick for contact
                                >
                                    Contact Us
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

export default NaviGation;
