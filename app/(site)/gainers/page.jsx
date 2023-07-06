"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useRouter } from "next/navigation";
import { currencyFormat, percentFormat } from "@/lib/utils";

export default function DashboardPage() {
  // const searchParams = useSearchParams();
  // const id = searchParams.get('id');
  // console.log(id)
  const [stocks, setStocks] = useState([]);
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session);

  // useEffect(() => {
  //     const getStocks = async () => {
  //        const response = await fetch(`/api/getstocks?id=${id}`)
  //          const data = await response.json();
  //             console.log(data);
  //             setStocks(data);
  //     }
  //     getStocks();
  // }, [])

  useEffect(() => {
    const getStocks = async () => {
      if (session?.user?.id) {
        const response = await fetch(`/api/gainers`);
        const data = await response.json();
        console.log("response", data);
        const updatedStocks = data.data.trends.map((obj) => {
          const split = obj.symbol.split(":");
          return {
            ...obj,
            symbol: split[0],
            price: currencyFormat(obj.price),
            change_percent: percentFormat(obj.change_percent),
          };
        });
        setStocks(updatedStocks);
      }
    };
    getStocks();
  }, [status]);

  // const handleDelete = async (id) => {
  //   const hasConfirmed = confirm(
  //     "Are you sure you want to remove this stock from your watch list?"
  //   );

  //   if (hasConfirmed) {
  //     const response = await fetch(`/api/getstocks/${id}/stocks`, {
  //       method: "DELETE",
  //     });

  //     const filteredStocks = stocks.filter((stock) => stock.id !== id);
  //     setStocks(filteredStocks);
  //   }
  // };

  return (
    <section className="text-center mt-20 w-full">
      <h1 className="mt-10 text-2xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
        {session?.user?.name ? `Welcome, ${session?.user?.name}` : "Welcome"}
        <br />
        <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent text-center">
          Top Gainers
        </span>
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto text-center">
        Checkout out the top gainers below.
      </p>
      {/* <Suspense fallback={<div className="text-center">Loading...</div>}>
        {stocks?.map((stock) => (
          <div key={stock._id}>
            <p>{stock.symbol.split(":").reverse().pop()}</p>
            <p>{stock.name}</p>
            <p>{stock.price}</p>
            <button onClick={() => handleDelete(stock._id)} className="bg-red-500 text-white p-2 rounded-full">Remove</button>
          </div>
        ))}
      </Suspense> */}
      <DataTable columns={columns} data={stocks} />
    </section>
  );
}
