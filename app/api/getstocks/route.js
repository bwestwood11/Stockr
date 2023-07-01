import { NextResponse } from "next/server";
import StockList from "@/models/stocklist";
import { getServerSession } from "next-auth";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const list = await StockList.find({ user: id });


    return NextResponse.json(list)
}