import mongoose from "mongoose";

export async function connectDB(){
    if(mongoose.connection.readyState === 1){
        return ;
    }
    await mongoose.connect(process.env.MONGODB_URI);

    //ready states
    // 0 → disconnected
    // 1 → connected
    // 2 → connecting
    // 3 → disconnecting
}