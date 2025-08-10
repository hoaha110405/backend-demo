import { IRegisterBase } from "../interfaces/register.js";

export interface IRegisterStrategy<T extends IRegisterBase, TResult = any> {
    createUser(data: T): Promise<TResult>;
}