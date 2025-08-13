import { IRegisterBase } from "../interfaces/register";

export interface IRegisterStrategy<T extends IRegisterBase, TResult = any> {
  createUser(data: T): Promise<TResult>;
}
