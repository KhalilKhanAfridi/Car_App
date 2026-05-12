// components/CarCard.jsx - Individual car listing card
import React, { useState } from "react";

// Format price safely
const formatPrice = (price) => {
  if (!price) return "0";
  return Number(price).toLocaleString("en-PK");
};

// FIXED: supports "kilometer" from your API
const getKms = (car) => {
  const kmsValue =
    car?.kilometer ||   // ✅ your API field
    car?.kms ||
    car?.km ||
    car?.mileage ||
    car?.distance ||
    0;

  return Number(kmsValue);
};

const CarCard = ({ car }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="
      group bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden
      hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10
      hover:-translate-y-1 transition-all duration-300 cursor-pointer
    ">

      {/* ── IMAGE ── */}
      <div className="relative h-48 bg-slate-700/50 overflow-hidden">

        {!imgError ? (
          <img
            src={car.link}
            alt={car.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500">
            No Image
          </div>
        )}

        {/* Fuel badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-900/80 text-amber-400 border border-amber-500/30">
            {car.fuel_type}
          </span>
        </div>

        {/* Transmission badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-slate-300 border border-slate-600/40">
            {car.transmission}
          </span>
        </div>

      </div>

      {/* ── CONTENT ── */}
      <div className="p-4">

        {/* Name */}
        <h3 className="text-white font-bold text-base group-hover:text-amber-400">
          {car.name}
        </h3>

        {/* Brand + Model */}
        <p className="text-slate-400 text-sm">
          {car.brand} · {car.model}
        </p>

        {/* Price */}
        <div className="mt-2">
          <span className="text-amber-400 font-black text-xl">
            PKR {formatPrice(car.price)}
          </span>
        </div>

        <div className="border-t border-slate-700/50 my-3" />

        {/* STATS */}
        <div className="grid grid-cols-2 gap-2 text-slate-400 text-xs">

          {/* KMs driven (FIXED) */}
          <div className="flex items-center gap-1">
            🚗 {getKms(car).toLocaleString()} km driven
          </div>

          {/* City */}
          <div className="flex items-center gap-1 truncate">
            📍 {car.city}
          </div>

        </div>

        {/* Button */}
        <button className="
          mt-4 w-full py-2 rounded-xl text-sm font-semibold
          bg-slate-700/50 hover:bg-amber-500 text-slate-300 hover:text-slate-900
          transition
        ">
          View Details
        </button>

      </div>
    </div>
  );
};

export default CarCard;