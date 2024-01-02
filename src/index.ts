import express from "express";
import userRouter from "./routes/userRouter";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).send({ message: "ok" });
});

app.use("/user", userRouter);

app.listen(4000, () => {
  console.log("listening on http://localhost:4000");
});
