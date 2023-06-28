'use client';

import { useState } from "react";

export default function SearchStock() {
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);

const handleSearch = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/search?symbol=${input}`);

    const data = await res.json();
    setResults(data);
}

  return (
    <section>
     <h1>Search For A Stock</h1>
     <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search..." value={input} onChange={(e) => setInput(e.target.value)} />
     </form>
    <p>{results?.data?.stock[0].symbol}</p> 
    <p>{results?.data?.stock[0].name}</p> 
    <p>{results?.data?.stock[0].price}</p> 
    </section>
  )
}
