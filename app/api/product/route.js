// creating a get route that connects with db uri stored in .env file

import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
import { NextResponse } from "next/server";
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await client.connect();
    console.log("connected to db successfully!");
    return client;
};

export async function GET(request){
    // connect to db
    const client = await connectDB();
    const db = client.db("stock");
    const inventory = db.collection("inventory");
    const data = await inventory.find({}).toArray();
    await client.close();
    return NextResponse.json(data);

}

export async function POST(request){
    const client = await connectDB();
    const db = client.db("stock");
    const inventory = db.collection("inventory");
    const data = await inventory.insertOne(request.body);
    await client.close();
    return NextResponse.json(data);
}
