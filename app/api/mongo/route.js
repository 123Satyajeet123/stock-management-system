// creating a get route that connects with db uri stored in .env file

import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
import { NextResponse } from "next/server";

const uri = process.env.MONGODB_URI;

export async function GET(request){
    // connect to db
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await client.connect();
    const db = client.db("sample_mflix");
    const collection = db.collection("movies");
    const data = await collection.find({}).toArray();
    await client.close();
    return NextResponse.json(data);

}