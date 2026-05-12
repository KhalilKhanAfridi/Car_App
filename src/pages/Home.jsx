import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import CarCard from "../components/CarCard";

const API_URL = "https://kami2334-car-recommender.hf.space/search";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("honda");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // FETCH API
  const fetchCars = async (query = "honda") => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${API_URL}?q=${query}&top_n=10&threshold=50`
      );

      // 🔥 FIX: safely extract array
      const data = response.data;

      const carList = Array.isArray(data)
        ? data
        : data?.results || data?.data || [];

      setCars(carList);
      setError(null);

    } catch (err) {
      console.error("API Error:", err);
      setError("your searched cars will appear here");
      setCars([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars("honda");
  }, []);

  // SAFE FILTER
  const filteredCars = cars.filter((car) => {
    const query = searchQuery.toLowerCase().trim();

    if (!car) return false;

    return (
      (car.name || "").toLowerCase().includes(query) ||
      (car.brand || "").toLowerCase().includes(query) ||
      (car.city || "").toLowerCase().includes(query) ||
      (car.model || "").toString().toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={(value) => {
          setSearchQuery(value);
          fetchCars(value);
        }}
      />

      <div className="text-center py-10 text-white">
        <h1 className="text-4xl font-bold">
          Find Your <span className="text-amber-400">Dream Car</span>
        </h1>
        <p className="text-slate-400 mt-2">
          Search cars instantly using API
        </p>
      </div>

      {loading && (
        <p className="text-center text-white">Loading cars...</p>
      )}

      {error && (
        <p className="text-center text-red-400">{error}</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6">
          {filteredCars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      )}

    </div>
  );
};

export default Home;