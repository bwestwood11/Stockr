"use client";

import { ColumnDef } from "@tanstack/react-table";

export type StockInfo = {
  name: string;
  symbol: string;
  price: number;
};

export const columns: ColumnDef<StockInfo>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "symbol",
    header: "Symbol",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
];
