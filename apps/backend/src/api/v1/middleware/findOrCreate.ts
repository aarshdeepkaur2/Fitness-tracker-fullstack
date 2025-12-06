import { getAuth, clerkClient } from "@clerk/express";
import { Request, Response, NextFunction } from "express";
import * as userService from "../services/userService";

export const findOrCreateUser = async (req: Request, _res: Response, next: NextFunction) => {
  try {
    const auth = getAuth(req);

    if (!auth.userId) {
      req.userId = null;
      return next();
    }

    let user = await userService.getUserById(auth.userId);

    if (!user) {
      const clerkUser = await clerkClient.users.getUser(auth.userId);

      user = await userService.createUser({
        id: auth.userId,
        name: clerkUser.firstName || "",
        email: clerkUser.emailAddresses[0]?.emailAddress || ""
      });
    }

    req.userId = user.id;
    next();
  } catch (error) {
    next(error);
  }
};
