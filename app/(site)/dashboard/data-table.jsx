"use client";

import {
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
import { FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export function DataTable({ columns, data }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table.getRowModel().rows[0]?.original?._id.toString());
  console.log("stock information", data);
  const [stocks, setStocks] = useState(table.getRowModel().rows);
  const router = useRouter();
  console.log("table", table.getRowModel().rows);

  // handle Delete function
  const handleDelete = async (id) => {
    console.log("stock id", id);
    const hasConfirmed = confirm(
      "Are you sure you want to remove this stock from your watch list?"
    );
    if (hasConfirmed) {
      const response = await fetch(`/api/getstocks/${id}/stocks`, {
        method: "DELETE",
      });

      const filteredStocks = stocks.filter((stock) => stock.id !== id);
      setStocks(filteredStocks);
    }
    router.push("/dashboard");
  };

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
                  <button
                    className="bg-red-500 hover:bg-red-500/70 text-white p-[6px] rounded-full"
                    onClick={() => handleDelete(row?.original?._id)}
                  >
                    <FaTrashAlt />
                  </button>
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
