"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
import { useState } from "react";
import { data } from "autoprefixer";
import {AiOutlinePlus} from 'react-icons/ai'
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"; 


// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[];
//   data: TData[];
// }

// <TData, TValue>
// DataTableProps<TData, TValue>
export function DataTable({
  columns,
  data,
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table.getRowModel().rows[0]?.original?._id);
 console.log("stock information", data)

  const [stocks, setStocks] = useState(table.getRowModel().rows);
  const router = useRouter();
  const { data: session } = useSession();
console.log('table', table.getRowModel().rows)


  // handle Add function
  const handleAdd = async ({ symbol, name, pre_or_post_market
  }) => {
    console.log("stock id", symbol, name, pre_or_post_market
    );
    const hasConfirmed = confirm(
          "Are you sure you want to add this stock from your watch list?"
        );
        if (hasConfirmed) {
          const res = await fetch("/api/stock", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user: session?.user?.id,
              symbol: symbol,
              name: name,
              price: pre_or_post_market
              ,
            }),
          });
          const data = await res.json();
          alert("Stock Added to Your Watch List");
  }
  }

  return (
    <div className="rounded-md border max-w-3xl flex justify-center mx-auto mt-8">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="text-center font-bold">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                 
                  </TableCell>
                ))}  
                <div className="p-4">
                 <button className="bg-green-500 hover:bg-green-500/70 text-white p-[6px] rounded-full" onClick={() => 
                  {
                    handleAdd(row?.original)
                    console.log(row?.original)
                  }
                  }><AiOutlinePlus /></button>
                 </div>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
