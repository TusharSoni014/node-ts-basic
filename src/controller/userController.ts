import { NextFunction, Request, Response } from "express";

export const getUserDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(200).send({ status: "okay" });
  } catch (error) {
    return res.status(500).send({ status: "not okay" });
  }
};
