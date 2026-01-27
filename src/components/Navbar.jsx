import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ to, children }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  return (
    <Link
      to={to}
      className={`relative px-4 py-2 text-[15px] font-medium transition
        ${active ? "text-white" : "text-white/70 hover:text-white"}
      `}
    >
      {children}
      {active && (
        <span className="absolute left-1/2 -bottom-1 h-[3px] w-10 -translate-x-1/2 rounded-full bg-[#F4B400]" />
      )}
    </Link>
  );
};

export default function Navbar() {
  return (
    // ✅ no blur/no overlay
    <header className="absolute top-0 left-0 z-50 w-full bg-transparent">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex h-[92px] items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-12 rounded-xl bg-black/70 flex items-center justify-center">
              <span className="text-white font-bold text-sm">UB</span>
            </div>
            <span className="text-white font-semibold tracking-wide">
              Unga Bunga
            </span>
          </Link>

          {/* Center: Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/shop">Shop</NavItem>
            <NavItem to="/about">About Us</NavItem>
            <NavItem to="/service">Services</NavItem>
            <NavItem to="/blog">Blog</NavItem>
            <NavItem to="/contact">Contact Us</NavItem>
          </nav>

          {/* Right: Icons */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              className="text-white/90 hover:text-white transition"
              aria-label="Cart"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6h15l-2 8H8L6 2H3"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className="text-white/90 hover:text-white transition"
              aria-label="Profile"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 21a8 8 0 1 0-16 0"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M12 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
