import { connectDB } from "@/lib/db";
import AddProduct from "./AddProduct";
import { auth } from "@/auth";
import Product from "@/models/Product";

export default async function ProductsPage() {
    const session = await auth();

    if(!session?.user?.id) {
        return <h1>Pleasw login first </h1>
    }
    await connectDB();
    const products = await Product.find({
        userId: session.user.id

    }).lean();
    
    return (
        <div>
            <h1>Products</h1>

            <AddProduct/>

            {
                products.map((product) => (
                    <div key = {product._id}>
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                    </div>
                ))
            }
        </div>
    );
}