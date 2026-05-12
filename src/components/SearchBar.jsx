// components/SearchBar.jsx - Reusable search input with icon
import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative w-full">

      {/* Search icon on the left */}
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Input field */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}  // Update state on every keystroke
        placeholder="Search by car name or brand..."
        className="
          w-full bg-slate-800 border border-slate-600/50 text-white placeholder-slate-400
          text-sm rounded-xl pl-9 pr-4 py-2.5
          focus:outline-none focus:border-amber-500/70 focus:ring-2 focus:ring-amber-500/20
          transition-all duration-200
        "
      />

      {/* Clear button — appears only when there's text */}
      {searchQuery && (
        <button
          onClick={() => setSearchQuery("")}
          className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

    </div>
  );
};

export default SearchBar;
