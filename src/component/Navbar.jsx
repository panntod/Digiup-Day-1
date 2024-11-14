import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Project", href: "/project" },
    { title: "Contact", href: "/contact" },
  ];

  const location = useLocation();

  return (
    <nav className="bg-gray-900 p-6 fixed w-full z-10">
      <div className="container flex items-center justify-between">
        <div className="text-white text-lg font-bold">
          <span className="text-blue-500">Tugas</span> Modul 2
        </div>

        <div className="flex space-x-4">
          {navLinks.map((nav) => (
            <Link
              key={nav.title}
              to={nav.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === nav.href
                  ? "text-white bg-gray-900"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
