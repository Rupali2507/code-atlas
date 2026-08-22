import express from "express";
import dotenv from 'dotenv';
import healthRoutes from "./routes/healthRoutes.js";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
const app = express();
dotenv.config();
const PORT = 5000;
app.use(express.json()); //middleware : allow express to understand JSON request bodies
app.use('/api',healthRoutes)
app.use('/api/auth',authRoutes)
connectDB();
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
});

