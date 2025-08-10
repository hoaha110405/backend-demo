import { PrismaClient } from "@prisma/client";
import { IManualRegister, IOAuthRegister } from "../interfaces/register.js";
import { IRegisterStrategy } from "./IRegisterStrategy.js";
import bcrypt from 'bcryptjs'

const prisma = PrismaClient()

export class ManualRegisterStrategy implements IRegisterStrategy<IManualRegister, any> {
    async createUser(data: IManualRegister): Promise<any> {

        console.log("Creating manual user:", data);

        const passwordHashed = await bcrypt.hash(data.password, 10);

        try {
        const user = await prisma.user.create({
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
            phone:true,
            createdAt: true,
            updatedAt: true,
            },
        });
        
        return user;
        } catch (error) {
            console.error("Error creating manual user:", error);
            throw error;
        }
    }
}

export class OAuthRegisterStategy implements IRegisterStrategy<IOAuthRegister, any> {
    async createUser(data: IOAuthRegister): Promise<any> {
        // do this later because haven't learn oauth yet
    }
}