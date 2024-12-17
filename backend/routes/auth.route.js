import express from "express";

const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  res.send("This is the /api/auth route");
});

export default authRouter;
