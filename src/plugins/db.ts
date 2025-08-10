import { DataSource } from "typeorm";
import { config } from "../env";
import { Podcast } from "../entities/podcast.entity";
import { Episode } from "../entities/episode.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: config.dbUrl,
  synchronize: true,
  ssl: { rejectUnauthorized: false },
  entities: [Podcast, Episode],
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
