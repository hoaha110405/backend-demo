import { Router } from "express";
import { AuthController } from "../controllers/auth";

const router = Router();
const authController = new AuthController();

// Sử dụng arrow function để giữ ngữ cảnh `this` của class
router.post("/register", authController.register);

export default router;
