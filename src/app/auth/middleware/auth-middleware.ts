import type { Request, Response, NextFunction } from "express";
import { verifyUserToken } from "../utils/token";

export function authenticationMiddleware() {
  return function (req: Request, res: Response, next: NextFunction) {
    const header = req.headers["authorization"];
    if (!header) return next();

    if (!header?.startsWith("Bearer ")) {
      return res.status(400).json({
        error: "Athorization must start with Bearer",
      });
    }

    const token = header.split(" ")[1];
    if (!token)
      return res.status(400).json({
        error: "Authorization must start with Bearer & followed byt token",
      });

    //if token exists , we should verify the user
    const user = verifyUserToken(token);

    //@ts-ignore
    req.user = user;

    next();
  };
}
// The above middleware doen't restricts it just check, I want it to run everytime when /auth routes are hit. -> so We add this Middleware int he index.ts file
export function restrictToAuthenticatedUser() {
  return function (req: Request, res: Response, next: NextFunction) {
    //@ts-ignore
    if (!req.user)
      return res.status(401).json({
        error: "Authentication required.",
      });
    return next();
  };
}
