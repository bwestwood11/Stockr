import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/database";
import StockList from "@/models/stocklist";

export async function GET(request, { params }) {
    console.log("params", params)
    await connectToDatabase();

    const stocks = await StockList.find({ user: params.id });

    if(!stocks) {
        return NextResponse.json('Stocks not found')
    }
 console.log("stocks", stocks)
    return NextResponse.json(stocks)
}

// Delete
export async function DELETE(request, { params }) {
    await connectToDatabase();

    const stocks = await StockList.findByIdAndDelete(params.id);

    if(!stocks) {
        return NextResponse.json('Stocks not found')
    }

    return NextResponse.json("Stock Deleted")
}