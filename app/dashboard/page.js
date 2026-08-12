import { auth } from "@/auth"
import LogoutButton from "./LogoutButton";

export default async function Dashboard() {
    const session = await auth();

    console.log("SESSION", session);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome {session?.user?.name}</p>

            <LogoutButton/>
        </div>

    );
}