import { PrismaClient } from "@prisma/client";
import { IManualRegister, IRegisterBase } from "../interfaces/register";
import { IRegisterStategy } from "../strategies/IRegisterStrategy";
import { ManualRegisterStrategy } from "../strategies/ManualStrategy";

export class AuthService {
  private strategy: IRegisterStategy<IRegisterBase>;
  private prisma = new PrismaClient();
  constructor(type: string) {
    switch (type) {
      case "MANUAL":
        this.strategy = new ManualRegisterStrategy(this.prisma);
        break;
      default:
        throw new Error("Invalid registration method");
    }
  }

  async register(data: IManualRegister) {
    return this.strategy.createUser(data);
  }
}
