import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';
import { IManualRegister } from '../interfaces/register';

export class ManualRegisterStrategy {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async execute(data: IManualRegister): Promise<any> {
        try {
            // Hash the password
            const hashedPassword =  bcryptjs.hashSync(data.password, 10)

            // Create user in database
            const user = await this.prisma.user.create({
                data: {
                    email: data.email,
                    password: hashedPassword,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    avatar: data.avatar,
                    type: data.type,
                },
                select: {
                    id: true,
                    email: true,
                    firstName: true,
                    lastName: true,
                    avatar: true,
                    type: true,
                    createdAt: true,
                }
            });

            return {
                success: true,
                data: user,
                message: 'User registered successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error,
                message: 'Failed to register user'
            };
        }
    }
}