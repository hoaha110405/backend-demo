import { IRegisterBase } from "../interfaces/register";

export interface IRegisterStategy<T extends IRegisterBase,TResult = JSON> {
    createUser(data:T):Promise<TResult>
}