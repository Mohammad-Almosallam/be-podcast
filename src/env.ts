import dotenv from "dotenv";
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL");
}
export const config = {
  dbUrl: process.env.DATABASE_URL,
  port: Number(process.env.PORT) || 3001,
};
