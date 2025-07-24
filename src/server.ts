import Fastify from "fastify";
import cors from "@fastify/cors";

import { connectDB } from "./plugins/db";
import { podcastRoutes } from "./routes/podcast.route";
import { config } from "./env";

async function start() {
  const app = Fastify({
    logger: {
      transport: {
        target: "pino-pretty",
        options: {
          translateTime: "HH:MM:ss",
          ignore: "pid,hostname",
          colorize: true,
        },
      },
    },
  });

  await app.register(cors);
  await connectDB();

  app.register(podcastRoutes, { prefix: "/podcast" });

  try {
    await app.listen({ port: config.port });
    console.log(`🚀 Server running at http://localhost:${config.port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
