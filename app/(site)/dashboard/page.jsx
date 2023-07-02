"use client";

import { Suspense, use, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import SearchStock from "@/components/SearchStock";
import { useSearchParams } from "next/navigation";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default function DashboardPage() {
  // const searchParams = useSearchParams();
  // const id = searchParams.get('id');
  // console.log(id)
  const [stocks, setStocks] = useState([]);
  const { data: session, status } = useSession();
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
        const response = await fetch(
          `/api/getstocks/${session?.user.id}/stocks`
        );
        const data = await response.json();
        console.log(data);
        setStocks(data);
      }
    };
    getStocks();
  }, [status]);

  const handleDelete = async (id) => {
    const hasConfirmed = confirm(
      "Are you sure you want to remove this stock from your watch list?"
    );

    if (hasConfirmed) {
      const response = await fetch(`/api/stock/${id}`, {
        method: "DELETE",
      });

      const filteredStocks = stocks.filter((stock) => stock.id !== id);
      setStocks(filteredStocks);
    }
  };

  return (
    <section className="text-center">
      <h1 className="font-bold text-2xl mt-10">Dashboard</h1>
      <h2>Your Personalized Watch List</h2>
      {/* <Suspense fallback={<div className="text-center">Loading...</div>}>
        {stocks?.map((stock) => (
          <div key={stock._id}>
            <p>{stock.symbol.split(":").reverse().pop()}</p>
            <p>{stock.name}</p>
            <p>{stock.price}</p>
          </div>
        ))}
      </Suspense> */}
      <Suspense>
        <DataTable columns={columns} data={stocks} />
      </Suspense>
    </section>
  );
}
