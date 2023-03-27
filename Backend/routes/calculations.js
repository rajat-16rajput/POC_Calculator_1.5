import express from "express";

const router = express.Router();

let results = ["10+2 ", "22+5 ", "55+66 ", "77+98 ", "98+1"];
//const results = "10+2";
//all routes in here are starting with /calculations
router.get("/", (req, res) => {
  console.log(results);
  res.send(results);
});

router.post("/", (req, res) => {
  // console.log(req.body);
  console.log("POST route reached in console");
  const newResult = req.body;
  results.push(req);
  res.send(results);
  // res.send("POST route reached");
});

export default router;
