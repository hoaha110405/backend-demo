"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const router = (0, express_1.Router)();
const authController = new auth_1.AuthController();
// Sử dụng arrow function để giữ ngữ cảnh `this` của class
router.post("/register", authController.register);
exports.default = router;
