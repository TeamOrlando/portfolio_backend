
import { Router } from "express";
import { checkUserSession } from "../middlewares/auth.js";
import { remoteUpload } from "../middlewares/uploads.js";
import { getUser, getUsers, Login, signup, token } from "../controller/user_controller.js";
import { addProfile, getUserProfile, updateUserProfile } from "../controller/profile_controller.js";



export const userRouter = Router();

userRouter.get("/users", getUsers);
userRouter.post("/users/auth/login", Login);
userRouter.post("/users/auth/token", token);
userRouter.post("/users/auth/signup", signup);
userRouter.get("/users/auth/:userName", getUser);
userRouter.get("/users/auth/userProfile", checkUserSession, getUserProfile);

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