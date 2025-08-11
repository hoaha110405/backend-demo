"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthRegisterStategy = exports.ManualRegisterStrategy = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
class ManualRegisterStrategy {
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Creating manual user:", data);
            const passwordHashed = yield bcryptjs_1.default.hash(data.password, 10);
            try {
                const user = yield prisma.user.create({
                    data: {
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        password: passwordHashed,
                        createdAt: new Date(),
                    },
                    select: {
                        id: true,
                        email: true,
                        firstName: true,
                        lastName: true,
                        role: true,
                        phone: true,
                        createdAt: true,
                        updatedAt: true,
                    },
                });
                return user;
            }
            catch (error) {
                console.error("Error creating manual user:", error);
                throw error;
            }
        });
    }
}
exports.ManualRegisterStrategy = ManualRegisterStrategy;
class OAuthRegisterStategy {
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // do this later because haven't learn oauth yet
        });
    }
}
exports.OAuthRegisterStategy = OAuthRegisterStategy;
