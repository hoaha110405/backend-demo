import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import {
  validate,
  registerSchema,
  loginSchema,
} from "../validations/auth.validation";

const router = Router();
const authController = new AuthController();

// Sử dụng arrow function để giữ ngữ cảnh `this` của class
router.post("/register", validate(registerSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);

export default router;
