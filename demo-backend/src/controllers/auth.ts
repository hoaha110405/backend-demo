import { AuthService } from "../services/auth";
import { Request, Response } from "express";

export class AuthController {
  async register(req: Request, res: Response) {
    const { type, ...data } = req.body;

    try {
      // Khởi tạo service dựa trên type
      const authService = new AuthService(type);
      const result = await authService.register(data);

      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({
        success: false,
        message: (error as Error).message,
      });
    }
  }
}
