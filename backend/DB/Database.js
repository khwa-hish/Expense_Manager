import mongoose from "mongoose";

export const connectDB = async (req, res) => {
//    const db = process.env.MONGO_URL;
    const db = "mongodb+srv://khwahishmalviya:082604@expense.s8gszgf.mongodb.net/expense_database";

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log("database connecTed");

}