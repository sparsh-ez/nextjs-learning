import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

export async function POST(req) {
    await connectDB();

    const data = await req.json();
    const product = await Product.create(data);

    return Response.json({
        message: "Product created",
        product
    });

}

export async function GET(req) {
    await connectDB();

    const products = await Product.find();

    return Response.json({
        products
    });
}