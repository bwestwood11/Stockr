"use client";

import { useSession } from "next-auth/react";

export default function Feed({ stock }) {
  const { data: session } = useSession();
  console.log("symbol", stock?.data?.stock[0].symbol);
  console.log(session);

  const AddStock = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/stock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: session?.user?.id,
        symbol: stock?.data?.stock[0].symbol,
        name: stock?.data?.stock[0].name,
        price: stock?.data?.stock[0].price,
      }),
    });
    const data = await res.json();
    alert("Stock Added to Your Watch List");
    console.log(data);
    return data;
  };

  console.log(stock);

  return (
    <section className="mt-6">
      {stock.length !== 0 && (
        <h2 className="font-bold text-2xl pb-4 text-center">Results</h2>
      )}
      <form onSubmit={AddStock} className="text-center">
        <p>{stock?.data?.stock[0].symbol}</p>
        <p>{stock?.data?.stock[0].name}</p>
        <p>{stock?.data?.stock[0].price}</p>
        {stock.length !== 0 && (
          <button
            type="submit"
            className="border w-full text-sm p-2 mt-6 rounded-lg bg-green-800 text-white hover:bg-green-800/70"
          >
            Add to Your Watch list
          </button>
        )}
      </form>
    </section>
  );
}
