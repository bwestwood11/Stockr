"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [stocks, setStocks] = useState([]);
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session);

  useEffect(() => {
    const getStocks = async () => {
      if (session?.user?.id) {
        const response = await fetch(
          `/api/getstocks/${session?.user.id}/stocks`,
          { cache: "no-cache" }
        );
        const data = await response.json();
        console.log(data);
        setStocks(data);
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
          Your Dashboard
        </span>
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto text-center">
        Checkout out your watchlist below.
      </p>
      <DataTable columns={columns} data={stocks} />
    </section>
  );
}
