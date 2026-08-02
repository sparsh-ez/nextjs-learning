"use client"

export default function Error({error, reset}){
    return(
        <div>
            <h1>
                Something went wrong 
            </h1>

            <button
            onClick={() => reset()}
            className="bg-blue-600 text-amber-50 px-4 py-2 mt-4"
            >
                try again
            </button>
        </div>
    )
}