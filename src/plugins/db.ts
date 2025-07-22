import { DataSource } from "typeorm";
import { Podcast } from "../entities/podcast.entity";
import { config } from "../env";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: config.dbUrl,
  synchronize: true,
  entities: ["src/entities/*.ts"],
  logging: false,
});

export async function connectDB() {
  console.log("Connecting to PostgreSQL...", config.dbUrl);
  try {
    await AppDataSource.initialize();
    console.log("Connected to PostgreSQL");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
}
