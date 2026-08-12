import Link from "next/link"

export default function NotFound() {
    return (
        <div>
            <h1>
                Product nhi h bhai
            </h1>
            <p>this product dont exist</p>

            <Link
            href={"/"}
            className="bg-blue text-white px-4 py-2 unline-block mt-5">
            Back to products
            </Link>
        </div>
    )
}