// components/Navbar.jsx - Top navigation bar with logo and search
import React from "react";
import SearchBar from "./SearchBar";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* ── Logo Section ── */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Car icon SVG */}
            <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
              <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
            </div>
            {/* Brand name */}
            <span className="text-white font-black text-xl tracking-tight">
              Auto<span className="text-amber-400">Souk</span>
            </span>
          </div>

          {/* ── Search Bar (desktop: flex-1, mobile: hidden here, shown below) ── */}
          <div className="flex-1 max-w-xl hidden sm:block">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>

          {/* ── Right side nav links ── */}
          <div className="hidden md:flex items-center gap-1 flex-shrink-0">
            <a href="#" className="text-slate-400 hover:text-amber-400 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-all">Buy</a>
            <a href="#" className="text-slate-400 hover:text-amber-400 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-all">Sell</a>
            <button className="ml-2 bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-bold px-4 py-1.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30">
              List Car
            </button>
          </div>

        </div>

        {/* ── Mobile Search Bar (shown below navbar row) ── */}
        <div className="sm:hidden pb-3">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
