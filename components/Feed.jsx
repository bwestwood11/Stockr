'use client'

import { useSession } from "next-auth/react";

export default function Feed({ stock }) {
    const { data: session } = useSession();
    console.log('symbol', stock?.data?.stock[0].symbol);
    console.log(session)

    const AddStock = async (e) => {
    e.preventDefault(); 
        const res = await fetch('/api/stock', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: session?.user?.id,
                symbol: stock?.data?.stock[0].symbol,
                name: stock?.data?.stock[0].name,
                price: stock?.data?.stock[0].price
            })
        })
        const data = await res.json();
         alert('Stock Added to Your Watch List')
        console.log(data);
        return data;
          
    }

  return (
    <section className="mt-6">
        <h2 className="font-bold text-2xl">Results</h2>
        <form onSubmit={AddStock}>
        <p>{stock?.data?.stock[0].symbol}</p>
        <p>{stock?.data?.stock[0].name}</p>
        <p>{stock?.data?.stock[0].price}</p>
        <button type="submit" className="border p-2 rounded-lg bg-green-800 text-white hover:bg-green-800/70" >Add to Your Watch list</button>
        </form>
    </section>
  )
}
