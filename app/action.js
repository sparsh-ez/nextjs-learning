"use server"
import { redirect } from "next/navigation"
export async function sayHello(prevState,formData) {
    
    const str1 = formData.get("firstName")
    const str2 = formData.get("lastName")

    // console.log(`hello ${str1} ${str2}!`)

    const a = Number(formData.get("value1"))
    const b = Number(formData.get("value2"))
    if(Number.isNaN(a) || Number.isNaN(b)){
        return{
            error: "invalid numbers"
        } ;
    }
    if(!str1){
        return {
            error : "First name is required",
            success:null
        };
    }
    // console.log(a+b)

    return {
        error:null,
        success: "form submitted successfully!"
    }

    // redirect(`/server-action?name=${str1}`);

}