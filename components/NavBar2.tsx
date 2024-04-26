"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import GearIcon from "./GearIcon";

interface NavBarProps {
  // Add any props you need here
}

const NavBar: React.FC<NavBarProps> = () => {
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
    <header className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between h-16">
        <Link href="/" passHref>
          <GearIcon className="h-16 w-16 cursor-pointer" />
        </Link>
        <nav className="hidden lg:flex space-x-4">
          {/* Desktop links */}
          <a href="#about" onClick={() => handleLinkClick(aboutRef)}>
            About Us
          </a>
          <a href="#focus" onClick={() => handleLinkClick(focusRef)}>
            Our Focus
          </a>
          <a href="#formula" onClick={() => handleLinkClick(formulaRef)}>
            Our Focus
          </a>
          <a href="#method" onClick={() => handleLinkClick(methodRef)}>
            Method
          </a>
          <a href="#portfolio" onClick={() => handleLinkClick(portfolioRef)}>
            Our Focus
          </a>
          <a href="#contact" onClick={() => handleLinkClick(contactRef)}>
            Contact Us
          </a>
        </nav>
        <div className="lg:hidden">
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
                <a href="#about" onClick={() => handleLinkClick(aboutRef)}>
                  About Us
                </a>
                <a href="#focus" onClick={() => handleLinkClick(focusRef)}>
                  Our Focus
                </a>
                <a href="#formula" onClick={() => handleLinkClick(formulaRef)}>
                  Formula
                </a>
                <a href="#method" onClick={() => handleLinkClick(methodRef)}>
                  Method
                </a>
                <a
                  href="#portfolio"
                  onClick={() => handleLinkClick(portfolioRef)}
                >
                  Our Focus
                </a>
                <a href="#contact" onClick={() => handleLinkClick(contactRef)}>
                  Contact Us
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
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

export default NavBar;
