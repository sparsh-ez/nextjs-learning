import { connectDB } from "@/lib/db";
import Product from "@/models/Product";
import { auth } from "@/auth";

export async function POST(req) {
    await connectDB();

    const session = await auth();
    console.log("session in post:", session);
    if(!session?.user?.id) {
        return Response.json(
            {error : "Unauthorized"},
            { status: 401}
        );
    }
    const data = await req.json();
    const product = await Product.create({
        title: data.title,
        price: data.price,
        userId: session.user.id 
    });

    return Response.json({
        message: "Product created",
        product
    });

}

export async function GET() {
    await connectDB();

    const session = await auth();
    console.log("session in get:", session);

    if(!session?.user?.id) {
        return Response.json(
            {error: "Unaauthorized"},
            {status : 401}
        );
    }

    const products = await Product.find({
        userId: session.user.id
    });

    return Response.json({
        products
    });
}