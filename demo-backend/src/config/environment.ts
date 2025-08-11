import dotenv from 'dotenv';
import path from 'path';

// Load biến môi trường từ file .env
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// Kiểu dữ liệu cho biến môi trường
type RegisterType = 'manual' | 'oauth';

interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  PORT: number;
  DATABASE_URL: string;
  REGISTER_TYPE: RegisterType;
}

// Parse và export biến môi trường
export const env: Environment = {
  NODE_ENV: (process.env.NODE_ENV as 'development' | 'production' | 'test') ?? 'development',
  PORT: Number(process.env.PORT) || 3000,
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/testDb',
  REGISTER_TYPE: (process.env.REGISTER_TYPE as RegisterType) ?? 'manual',
};
