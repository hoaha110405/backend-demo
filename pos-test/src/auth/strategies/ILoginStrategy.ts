import { ILoginBase } from "../interfaces/login";

export interface ILoginStrategy<T extends ILoginBase, TResult = any> {
  findUser(data: T): Promise<TResult>;
}
