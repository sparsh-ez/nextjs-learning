import Addtocart from "@/components/Addtocart";
import Link from "next/link"
import { sayHello } from "./action";

export default async function Home() {
  console.log("fetching products...")
  const res = await fetch("https://dummyjson.com/products", {
    next: {
    revalidate: 10
  }
  })
  

  const data  = await res.json();
  // const product = data.products[0]

  // console.log("2.Finished waiting")
  return (
    <div>
      <h1>Products</h1>
      {data.products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>
            <h2>
              {product.title}
            </h2>
          </Link>
          
        <p>
          {product.price}
        </p>
        <Addtocart/>
        </div>
      ))}
      
    </div>
  );
}

