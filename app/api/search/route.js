import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);

    const query = searchParams.get('symbol');
    
    const response = await fetch(`https://real-time-finance-data.p.rapidapi.com/search?query=${query}`, {
        "method": "GET",
        "headers": {
        'X-RapidAPI-Key': 'd60309a2dbmsh632044c5269d41cp115ad2jsn95dbc3ebd84c',
		'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
    }
    });

    const data = await response.json();
    return NextResponse.json(data);
}