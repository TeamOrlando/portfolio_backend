
import { Router } from "express";
import { checkUserSession } from "../middlewares/auth.js";
import { remoteUpload } from "../middlewares/uploads.js";
import { getUser, getUsers, Login, signup } from "../controller/user_controller.js";
import { addProfile, getUserProfile, updateUserProfile } from "../controller/profile_controller.js";



export const userRouter = Router();

userRouter.get("/users", checkUserSession, getUsers);
userRouter.post("/users/auth/login", checkUserSession, Login);
userRouter.post("/users/auth/signup", checkUserSession, signup);
userRouter.get("/users/auth/:userName", checkUserSession, getUser);
userRouter.get("/users/userProfile", checkUserSession, getUserProfile);

userRouter.post(
  "/users/userProfile",
  remoteUpload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  checkUserSession,
  addProfile
);


userRouter.patch(
  "/users/userProfile/:id",
  remoteUpload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  checkUserSession,
  updateUserProfile
);