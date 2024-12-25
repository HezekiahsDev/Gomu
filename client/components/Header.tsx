"use client";
import React, { useState, useEffect, useMemo } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Memoize menuItems to avoid unnecessary re-renders
  const menuItems = useMemo(
    () => [
      { label: "Home", id: "hero" },
      { label: "About", id: "about" },
      { label: "Roadmap", id: "roadmap" },
      { label: "Community", id: "community" },
      { label: "Disclaimer", id: "disclaimer" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]); // menuItems is now stable due to useMemo

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu on mobile after clicking
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">Gomu Gomu Coin</div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:block absolute lg:static top-16 left-0 w-full lg:w-auto bg-blue-900 lg:bg-transparent lg:space-x-6 transition-all`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`py-2 lg:py-0 px-4 lg:px-0 ${
                  activeSection === item.id ? "text-yellow-500" : "text-white"
                } hover:text-yellow-500 cursor-pointer`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
