import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://alexa:989299@cluster0.dy9oyaj.mongodb.net/TomatoMERNProject').then(()=>console.log("DB Connected"));
}