import { NextFunction, Request, Response } from "express";

export const isAuth = (req: Request, res: Response, next: NextFunction) =>
  req.user ? next() : res.status(403).json({ error: "Unauthorized" });
