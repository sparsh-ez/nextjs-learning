import { notFound } from "next/navigation";
import Image from "next/image";

async function ProductPage({params}) {
    const{id} = await params
  

    //fetching only tcurrent product
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if(res.status === 404){
        notFound();
    }


    console.log("Status:", res.status);
    console.log("OK:", res.ok);
    const product = await res.json();
    // console.log(Object.keys(product));

    // throw new Error("testis error.js");

    return(
        <div>
            <Image
            src = {product.thumbnail}
            alt={product.title}
            width={300}
            height={300}
            />

            <h1>{product.title}</h1>
            <p> description : {product.description}</p>
            <p>price : {product.price}</p>
            <p>category : {product.category}</p>
            <p>width : {product.dimensions?.width}</p>
            <p>height : {product.dimensions?.height}</p>
            <p>depth : {product.dimensions?.depth}</p>

        </div>
    )
}

export default ProductPage;