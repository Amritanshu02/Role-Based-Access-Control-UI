import express from "express";
import { isAdminRoute, protectRoute } from "../middlewares/authMiddlewave.js";
import {
  activateUserProfile,
  changeUserPassword,
  deleteUserProfile,
  getNotificationsList,
  getTeamList,
  loginUser,
  logoutUser,
  markNotificationRead,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

//Here protectRoute is that the user needs to be login to access the route
// Here AdminRoute s that user need to be admin to access this route
//Both are defined in middlewares->authmiddleware

//rest getTeamList , registeruser, ... etc are defined in user controller

router.get("/get-team", protectRoute, isAdminRoute, getTeamList);
router.get("/notifications", protectRoute, getNotificationsList);
// router.get("/get-team", isAdminRoute, getTeamList);
// router.get("/notifications", getNotificationsList);

router.put("/profile", protectRoute, updateUserProfile);
router.put("/read-noti", protectRoute, markNotificationRead);
router.put("/change-password", protectRoute, changeUserPassword);
// router.put("/profile", updateUserProfile);
// router.put("/read-noti", markNotificationRead);
// router.put("/change-password", changeUserPassword);

// //   FOR ADMIN ONLY - ADMIN ROUTES
router
  .route("/:id")
  .put(protectRoute, isAdminRoute, activateUserProfile)
  .delete(protectRoute, isAdminRoute, deleteUserProfile);
// router
//   .route("/:id")
//   .put(isAdminRoute, activateUserProfile)
//   .delete(isAdminRoute, deleteUserProfile);

export default router;