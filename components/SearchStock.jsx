"use client";

import { useState } from "react";
import Feed from "./Feed";
import { FaSearch } from "react-icons/fa";

export default function SearchStock() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/search?symbol=${input}`);
    const data = await res.json();
    setResults(data);
    setInput("");
  };

  return (
    <section>
      <h1 className="mt-10 text-3xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
        Search for a
        <br />
        <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent text-center">
          Stock
        </span>
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto text-center">
        Search by either symbol or company name!
      </p>
      <form onSubmit={handleSearch} className="flex">
        <input
          className="rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-3"
          type="text"
          placeholder="Search Here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" disabled={input === ""}>
          {input !== "" ? (
            <FaSearch size={20} className="self-center ml-3 text-green-600" />
          ) : (
            <FaSearch
              size={20}
              className="self-center ml-3 hover:cursor-not-allowed"
            />
          )}
        </button>
      </form>
      <Feed stock={results} />
    </section>
  );
}
