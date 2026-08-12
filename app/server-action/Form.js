"use client";

import { useActionState } from "react";
import { sayHello } from "../action";


export default function Form() {
    const [state,formAction] = useActionState(sayHello,null);
    return (
        <form action={formAction}>

        <input type="text"
        name="firstName"
        placeholder="First name" 
        />

        <input type="text" 
        name="lastName" 
        placeholder="last name" 
        />

        <input type="number"
        name="value1"
        placeholder="number 1" 
        />

        <input type="number" 
        name="value2" 
        placeholder="number 2"
         />

         <button type="submit">Save</button>

        {
            state?.success && (
                <p>{state.success}</p>
            )
        }
        {
            state?.error && (
                <p>{state.error}</p>
            )
        }
        
        </form>
    );
}