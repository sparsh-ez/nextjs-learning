import { connectDB } from "@/lib/db";
import Product from "@/models/Product";
import { auth } from "@/auth";

export async function PATCH(req, { params }) {
    await connectDB();
    const session = await auth();
    console.log("PATCH SESSION: " , session)

    if(!session?.user?.id) {
        return Response.json(
            {error : "Unauthorized"},
            {status:401}
        );
    }
    const {id} = await params ;

    const data = await req.json();
    const product = await Product.findByIdAndUpdate(
        {

            _id:id,
            userId : session.user.id
        },
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

    const session = await auth();
    console.log("DELETE SESSION : ", session);

    if(!session?.user?.id) {
        return Response.json(
            {error: "Unauthorized"},
            {status: 401}
        )
    }
    const {id} = await params;

    const product = await Product.findByIdAndDelete({
        _id:id,
        userId: session.user.id
    });
    if(!product) {
        return Response.json(
            {error: "product not found"},
            {status: 404}
        );
    }
    return Response.json({
    message: "Product deleted",
    product
    });
}