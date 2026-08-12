import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import User from "./models/User";
import bcrypt from "bcryptjs";
import { connectDB } from "./lib/db";

export const {auth, handlers, signIn, signOut} = NextAuth({
    ...authConfig,

    providers:[
        Credentials({
            async authorize(credentials) {
                
                await connectDB();

                const user = await User.findOne({
                    email:credentials.email
                })

             

                if(!user){
                    return null;
                }

                const passwordMatch  = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

    

                if(!passwordMatch){
                    return null;
                }
                return user;
            }
        })
    ]
});