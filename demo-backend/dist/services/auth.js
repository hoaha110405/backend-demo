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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const ManualStrategy_1 = require("../strategies/ManualStrategy");
class AuthService {
    // private prisma = new PrismaClient();
    constructor(type) {
        switch (type) {
            case "MANUAL": // add to env or environment config --- Hoa: try to remember this
                this.strategy = new ManualStrategy_1.ManualRegisterStrategy();
                break;
            default:
                throw new Error("Invalid registration method");
        }
    }
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.strategy.createUser(data);
        });
    }
}
exports.AuthService = AuthService;
