import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar2 from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "i-Group of Companies",
  description: "Business with Meaning and Purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Ensure you include the head element for metadata, it's often managed by next/head */}
      </head>
      <body className={inter.className}>
        <NavBar2 /> {/* Navbar at the top */}
        <main>{children}</main> {/* Main content area */}
        <Footer /> {/* Footer at the bottom */}
      </body>
    </html>
  );
}
