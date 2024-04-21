"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ChartIcon from "./ChartIcon";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-[#1A202C] to-[#2D3748]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2" href="#">
          <ChartIcon className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold text-white lg:text-xl">
            i-Group
          </span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-base font-medium">
            <li>
              <Link
                className="relative text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform hover:after:scale-x-100 hover:text-[#4A5568] hover:underline"
                href="#"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="relative text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform hover:after:scale-x-100 hover:text-[#4A5568] hover:underline"
                href="#"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="relative text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform hover:after:scale-x-100 hover:text-[#4A5568] hover:underline"
                href="#"
              >
                Our Focus
              </Link>
            </li>
            <li>
              <Link
                className="relative text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform hover:after:scale-x-100 hover:text-[#4A5568] hover:underline"
                href="#"
              >
                Method
              </Link>
            </li>
            <li>
              <Link
                className="relative text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform hover:after:scale-x-100 hover:text-[#4A5568] hover:underline"
                href="#"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="relative text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform hover:after:scale-x-100 hover:text-[#4A5568] hover:underline"
                href="#"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <Button size="icon" variant="ghost">
            <MenuIcon className="h-8 w-8 text-white" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

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
