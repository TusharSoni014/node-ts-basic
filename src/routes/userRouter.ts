import express, { Router } from "express";
import { getUserDetails } from "../controller/userController";

const userRouter: Router = express.Router();

userRouter.get("/my", getUserDetails);

export default userRouter;