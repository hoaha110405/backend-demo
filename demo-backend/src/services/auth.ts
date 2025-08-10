import { PrismaClient } from "@prisma/client";
import { IManualRegister, IRegisterBase } from "../interfaces/register.js";
import { IRegisterStrategy } from "../strategies/IRegisterStrategy.js";
import { ManualRegisterStrategy } from "../strategies/ManualStrategy.js";

export class AuthService {
  private strategy: IRegisterStrategy<IRegisterBase>;
  private prisma = new PrismaClient();
  constructor(type: string) {
    switch (type) {
      case "MANUAL":                                     // add to env or environment config --- Hoa: try to remember this
        this.strategy = new ManualRegisterStrategy();
        break;
      default:
        throw new Error("Invalid registration method");
    }
  }

  async register(data: IManualRegister) {
    return this.strategy.createUser(data);
  }
}
