
import { Router } from "express";
import { checkUserAuth } from "../middlewares/auth.js";
import { remoteUpload } from "../middlewares/uploads.js";
import { getUser, getUsers, Login, signup, token, logout } from "../controller/user_controller.js";
import { addProfile, getUserProfile, updateUserProfile } from "../controller/profile_controller.js";



export const userRouter = Router();

userRouter.post("/users/auth/signup", signup);
userRouter.post("/users/auth/session/login", Login);
userRouter.post("/users/auth/token/login", token);
userRouter.get("/users", getUsers);
userRouter.get("/users/auth/:userName", getUser);
userRouter.get("/users/userProfile", checkUserAuth, getUserProfile);
userRouter.post("/users/auth/logout", logout);

userRouter.post(
  "/users/userProfile",
  remoteUpload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  checkUserAuth,
  addProfile
);


userRouter.patch(
  "/users/userProfile/:id",
  remoteUpload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  checkUserAuth,
  updateUserProfile
);