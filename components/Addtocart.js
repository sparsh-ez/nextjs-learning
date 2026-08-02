"use client"


export default function Addtocart() {
    function handleClick() {
        alert("added to cart")
    }

    return (
        <button onClick={handleClick} 
        className="bg-green-600 text-white px-4 py-2 ">
            add to cart
        </button>
    )
}
