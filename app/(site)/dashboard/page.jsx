'use client'

import { Suspense, use, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import SearchStock from "@/components/SearchStock";
import { useSearchParams } from 'next/navigation'

export default function DashboardPage() {
const searchParams = useSearchParams();
const id = searchParams.get('id');
console.log(id)
const [stocks, setStocks] = useState([]);

useEffect(() => {
    const getStocks = async () => {
       const response = await fetch(`/api/getstocks?id=${id}`)
         const data = await response.json();
            console.log(data);
            setStocks(data);
    }
    getStocks();
}, [])

  return (
    <section className="text-center">
        <h1 className="font-bold text-2xl mt-10">Dashboard</h1>
        <h2>Your Personalized Watch List</h2>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
             {stocks?.map((stock) => (
                 <div key={stock.id}>
                        <p>{stock.symbol}</p>
                        <p>{stock.name}</p>
                        <p>{stock.price}</p>
                    </div>
                ))}
        </Suspense>
    </section>
  )
}
