"use client"
import { signIn } from "next-auth/react";

export default function Login() {
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get("email");
        const password = formData.get("password")

        await signIn("credentials", {
            email, 
            password,
            redirectTo: "/dashboard",
        });
    }


    return (
        <div>
            <h1>Login Page </h1>

            <form onSubmit={handleSubmit}>
                <input type="email"
                name="email"
                placeholder="email" 
                />

                <input type="password" 
                name="password" 
                placeholder="Password"
                 />

                <button type="submit">
                    Login
                </button> 
            </form>
        </div>
    )
}