import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { getUsersForSidebar, getMessages ,sendMessage } from "../controllers/message.controller.js";


// import { get } from "mongoose"; // Removed unused import
const router =express.Router();


 router.get("/users",protectRoute,getUsersForSidebar);
 router.get("/:id",protectRoute,getMessages);
router.post("/user/:id", protectRoute, sendMessage); // Added missing slash
// Define the sendMessage function

export default router;