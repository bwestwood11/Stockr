"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useRouter } from "next/navigation";
import { currencyFormat, percentFormat } from "@/lib/utils";

export default function DashboardPage() {
  const [stocks, setStocks] = useState([]);
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session);

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
      <DataTable columns={columns} data={stocks} />
    </section>
  );
}
