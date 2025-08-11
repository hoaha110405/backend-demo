"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Load biến môi trường từ file .env
dotenv_1.default.config({ path: path_1.default.resolve(process.cwd(), '.env') });
// Parse và export biến môi trường
exports.env = {
    NODE_ENV: (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'development',
    PORT: Number(process.env.PORT) || 3000,
    DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/testDb',
    REGISTER_TYPE: (_b = process.env.REGISTER_TYPE) !== null && _b !== void 0 ? _b : 'manual',
};
