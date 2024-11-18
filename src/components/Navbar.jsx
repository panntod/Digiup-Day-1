import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { title: "Profil", href: "/" },
    { title: "Poliklinik", href: "/" },
    { title: "Fasilitas", href: "/facility" },
    { title: "Lokasi", href: "/" },
    { title: "Kontak", href: "/" },
  ];

  return (
    <nav className="px-6 fixed w-full z-10 bg-white">
      <div className="container space-y-2">
        <Link to="/">
          <img src="/logo.jpg" alt="logo" width={400} height={120} />
        </Link>

        <div className="w-full flex space-x-4">
          {navLinks.map((nav) => (
            <Link
              key={nav.title}
              to={nav.href}
              className={`block w-1/5 rounded-md text-base font-medium text-center bg-green-600 text-white py-2 shadow-md hover:bg-green-700`}
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
