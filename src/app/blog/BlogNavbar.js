import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="flex space-x-6 text-gray-700 font-medium">
        <Link
          href="/blog"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Blog
        </Link>
        <Link
          href="/blog/list"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          List
        </Link>
        <Link
          href="/blog/new"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          New
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
