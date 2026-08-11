import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

export async function PATCH(req, { params }) {
    await connectDB();
    const {id} = await params ;

    const data = await req.json();
    const product = await Product.findByIdAndUpdate(
        id, 
        data,
        {new:true}
    );

    return Response.json({
        message: "Product updated",
        product
    });
}

export async function DELETE(req, { params }) {
    await connectDB();
    const {id} = await params;

    const product = await Product.findByIdAndDelete(id);
    return Response.json({
    message: "Product deleted",
    product
    });
}