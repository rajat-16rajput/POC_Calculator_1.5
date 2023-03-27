import express from "express";
import bodyParser from "body-parser";
import calculationRoutes from "./routes/calculations.js";
import cors from "cors";
const app = express();
const PORT = 5000;
app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:3000/calculations/results",
//     methods: ["GET", "POST"],
//   })
// );
app.use(bodyParser.json()); //this tells that we are using json data
app.use("/calculations", calculationRoutes);

//
app.get("/", (req, res) => {
  console.log("[TEST SUCCESSFUL!]");
  res.send("Welcome to the home page");
});

app.listen(PORT, () => {
  console.log(`Rajat 's Server Running on port http://localhost:${PORT}`);
});
