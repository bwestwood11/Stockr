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
console.log('table', table.getRowModel().rows)


  // handle Add function
  const handleAdd = async (id) => {
    console.log("stock id", id);
    const hasConfirmed = confirm(
          "Are you sure you want to add this stock from your watch list?"
        );
        if (hasConfirmed) {
    const response = await fetch(`/api/getstocks/${id}/stocks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),

    });


    const filteredStocks = stocks.filter((stock) => stock.id !== id);
    setStocks(filteredStocks);
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
                 <button className="bg-green-500 hover:bg-green-500/70 text-white p-[6px] rounded-full" onClick={() => handleAdd(row?.original?._id)}><AiOutlinePlus /></button>
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
