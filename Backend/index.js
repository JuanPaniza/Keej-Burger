import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import menuRoutes from "./routes/menuRoutesuno.js"
import cartRoutes from "./routes/cartRoutes.js"
dotenv.config();
const app = express();

app.use(express.json({ limit: "50mb" }));

app.use(
  cors({
    origin: process.env.URL_DOMAIN || "http://localhost:3000",
    methods: "GET, POST, DELETE, PUT",
    credentials: true,
  })
);


connectDB();
// Routing
app.use("/api/users", userRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/cart", cartRoutes);





const port = process.env.port || 8080;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));


