import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          <Link href={"/"}>My Website</Link>
        </div>
        <div className="space-x-6">
          <Link
            href="/about"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
