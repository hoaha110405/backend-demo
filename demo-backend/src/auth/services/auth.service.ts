// auth.service.ts
import { ManualLoginStrategy } from "../strategies/ManualLoginStrategy";
import { ManualRegisterStrategy } from "../strategies/ManualRegisterStrategy";

export class AuthService {
  private loginStrategies: Record<string, any>;
  private registerStrategies: Record<string, any>;

  constructor() {
    this.loginStrategies = {
      MANUAL: new ManualLoginStrategy(),
      // oauth: new OAuthLoginStrategy(),
    };

    this.registerStrategies = {
      MANUAL: new ManualRegisterStrategy(),
      // oauth: new OAuthRegisterStrategy(),
    };
  }

  async login(type: string, data: any) {
    const strategy = this.loginStrategies[type];
    if (!strategy) throw new Error(`Login type ${type} not supported`);
    return await strategy.findUser(data);
  }

  async register(type: string, data: any) {
    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa          ", type);
    const strategy = this.registerStrategies[type];
    if (!strategy) throw new Error(`Register type ${type} not supported`);
    return await strategy.createUser(data);
  }
}
