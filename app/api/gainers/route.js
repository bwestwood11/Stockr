import { NextResponse } from "next/server";
import StockList from "@/models/stocklist";

export async function GET(request) {


    const response = await fetch('https://real-time-finance-data.p.rapidapi.com/market-trends?trend_type=GAINERS&country=us&language=en', {
        "method": "GET",
        "headers": {
        'X-RapidAPI-Key': 'd60309a2dbmsh632044c5269d41cp115ad2jsn95dbc3ebd84c',
		'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
    }
})

    const data = await response.json();
    console.log("data", data)
    
    return NextResponse.json(data);
}

// POST Request Adding Gainer To Database

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