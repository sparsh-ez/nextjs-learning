import AddProduct from "./AddProduct";

export default async function ProductsPage() {
    const res = await fetch("http://localhost:3000/api/products");
    const data = await res.json();
    
    return (
        <div>
            <h1>Products</h1>

            <AddProduct/>

            {
                data.products.map((product) => (
                    <div key = {product._id}>
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                    </div>
                ))
            }
        </div>
    );
}