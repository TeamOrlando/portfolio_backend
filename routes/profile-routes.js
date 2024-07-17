import { Router } from "express"
import { checkUserSession } from "../middlewares/auth.js";
import { addProfile, getUserProfile, updateUserProfile } from "../controller/profile_controller.js";
import { remoteUpload } from "../middlewares/uploads.js";



// //defining router
export const profileRouter = Router();

profileRouter.get("/users/userProfile", checkUserSession, getUserProfile);

profileRouter.post(
  "/users/userProfile",
  remoteUpload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  checkUserSession,
  addProfile
);


profileRouter.patch(
  "/users/userProfile/:id",
  remoteUpload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  checkUserSession,
  updateUserProfile
);
