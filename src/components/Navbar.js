"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link href="/" className="logo" onClick={closeMenu}>
          <span className="logo-symbol">∑</span>
          <span className="logo-text">
            Maths<span>Matters</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/why-maths">Why Mathematics</Link>
          <Link href="/south-africa">South Africa</Link>
          <Link href="/improve">Improve</Link>
          <Link href="/about">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/why-maths" onClick={closeMenu}>Why Mathematics</Link>
        <Link href="/south-africa" onClick={closeMenu}>South Africa</Link>
        <Link href="/improve" onClick={closeMenu}>Improve</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
      </div>
    </nav>
  );
}