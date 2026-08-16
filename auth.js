import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import User from "./models/User";
import bcrypt from "bcryptjs";
import { connectDB } from "./lib/db";

export const {
    auth,
    handlers,
    signIn,
    signOut
} = NextAuth({
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
                // console.log("AUTH USER:", {
                // id: user._id.toString(),
                // name: user.name,
                // email: user.email
                // });

                return {
                    
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email
                };
            }
        })
    ],
    callbacks: {
        async jwt({ token, user}) {
            if(user) {
                token.id = user.id;
            }
            return token;
        },
        async session({session, token}) {
            session.user.id = token.id;
            return session;
        }
        
    }
});