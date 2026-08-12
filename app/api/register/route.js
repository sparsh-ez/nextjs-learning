import { connectDB } from "@/lib/db";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export async function POST(request) {
    await connectDB();

    const { name, email, password} = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    return Response.json({
        message: "user created",
        name: user.name,
        email:user.email
    });
}