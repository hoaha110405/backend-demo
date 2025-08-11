import { IManualRegister, IRegisterBase } from "../interfaces/register";
import { IRegisterStrategy } from "../strategies/IRegisterStrategy";
import { ManualRegisterStrategy } from "../strategies/ManualStrategy";

export class AuthService {
  private strategy: IRegisterStrategy<IRegisterBase>;
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
