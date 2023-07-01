import StockList from "@/models/stocklist";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { user, symbol, name, price } = await request.json();
    console.log({ user, symbol, name, price})


    const stock = await StockList.create({
        user,
        symbol,
        name,
        price,
    });

    return NextResponse.json(stock);
}