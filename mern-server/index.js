import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 8000;

//mongoose
async function main() {
  await mongoose.connect(process.env.DB_URL);
  console.log("DB connection successfully");
}
main().catch((err) => {
  console.log(err);
});

//middlewares
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("default"));
app.use(express.json());

//router
app.use("/books", bookRoute.router);

app.get("/", (req, res) => {
  return res.send("API Live");
});
app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
