"use client";
import { Button } from "@/components/ui/button";
import GearIcon from "./GearIcon";

export default function NavBar() {
  return (
    <nav className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center text-white dark:text-gray-200 font-bold">
          <GearIcon className="h-16 w-16 mr-2" />
          i-Group of Companies
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a
            className="text-white dark:text-gray-200 hover:underline px-3 py-2 rounded-md transition-colors duration-300"
            href="/"
          >
            Home
          </a>
          <a
            className="text-white dark:text-gray-200 hover:underline px-3 py-2 rounded-md transition-colors duration-300"
            href="about"
          >
            About Us
          </a>
          <a
            className="text-white dark:text-gray-200 hover:underline px-3 py-2 rounded-md transition-colors duration-300"
            href="focus"
          >
            Our Focus
          </a>
          <a
            className="text-white dark:text-gray-200 hover:underline px-3 py-2 rounded-md transition-colors duration-300"
            href="method"
          >
            Method
          </a>
          <a
            className="text-white dark:text-gray-200 hover:underline px-3 py-2 rounded-md transition-colors duration-300"
            href="portfolio"
          >
            Portfolio
          </a>
          <Button
            className="bg-violet-600 text-white hover:bg-violet-700 border-violet-600 px-4 py-2 rounded-md transition-colors duration-300"
            variant="outline"
          >
            Contact Us
          </Button>
        </div>
        <div className="md:hidden">
          <button
            aria-controls="mobile-menu"
            className="text-white dark:text-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-300"
            type="button"
          >
            <svg
              className="h-6 w-6 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="md:hidden " id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            className="text-white dark:text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            href="/"
          >
            Home
          </a>
          <a
            className="text-white dark:text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            href="about"
          >
            About Us
          </a>
          <a
            className="text-white dark:text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            href="focus"
          >
            Our Focus
          </a>
          <a
            className="text-white dark:text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            href="method"
          >
            Method
          </a>
          <a
            className="text-white dark:text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            href="portfolio"
          >
            Portfolio
          </a>
          <Button
            className="bg-violet-600 text-white hover:bg-violet-700 border-violet-600 px-3 py-2 rounded-md text-base font-medium w-full transition-colors duration-300"
            variant="outline"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
}

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}
