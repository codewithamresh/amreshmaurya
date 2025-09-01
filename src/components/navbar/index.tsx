

import { useState } from "react";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import "./style.css"; // or use Tailwind directly

const navLinks = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "#skills", label: "Skills" },
  { href: "#profiles", label: "Profiles" },
  { href: "#contact", label: "Contact" },
  { href: "#projects", label: "Projects" },
  { href: "#blogs", label: "Blogs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar glassy-nav">
      <div className="nav-content">
     

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.icon || link.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}
