"use client"

export default function AddProduct() {
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const title = formData.get("title");
        const price = Number(formData.get("price"));

        const res = await fetch("/api/products", {
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                title, 
                price
            })
        });

        const data = await res.json();
        window.location.reload()
        
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
            name="title"
            placeholder="Product title" />

            <input type="number"
            name="price"
            placeholder="Price" />

            <button>
                Add Product
            </button>
        </form>
    );
}