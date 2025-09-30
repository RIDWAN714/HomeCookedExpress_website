
import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ridwanstack:ridwan2345@cluster0.5yuofuz.mongodb.net/home-cooked-express').then(()=>console.log("DB Connected"));
}