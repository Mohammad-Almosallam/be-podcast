import { FastifyInstance } from "fastify";
import axios from "axios";
import { AppDataSource } from "../plugins/db";
import { Podcast } from "../entities/podcast.entity";
import { Episode } from "../entities/episode.entity";
import { In } from "typeorm";

//ideally this would be in a config file, but for simplicity I'll hardcode it
const ITUNES_SEARCH_URL = "https://itunes.apple.com/search";

type PodcastSearchParams = {
  Querystring: {
    term: string;
    entity?: "podcast" | "podcastEpisode";
  };
};

export async function podcastRoutes(app: FastifyInstance) {
  app.get<PodcastSearchParams>("/", async (req, res) => {
    const term = req.query.term;

    if (!term) {
      return res.code(400).send({ error: "Missing search term" });
    }

    try {
      //since apple itunes api does not support multiple entities in a single request
      //I'll make two concurrent requests, one for podcasts and one for episodes
      const [podcastRes, episodeRes] = await Promise.all([
        axios.get(ITUNES_SEARCH_URL, {
          params: { term, entity: "podcast" },
        }),
        axios.get(ITUNES_SEARCH_URL, {
          params: { term, entity: "podcastEpisode" },
        }),
      ]);

      const podcasts = podcastRes.data.results;
      const episodes = episodeRes.data.results;
      console.log("Fetched data from iTunes");

      const podcastRepo = AppDataSource.getRepository(Podcast);
      const episodeRepo = AppDataSource.getRepository(Episode);

      // save new podcasts only (you can create a similar entity for episodes if needed)
      const podcastTrackIds = podcasts.map((p: any) => String(p.trackId));
      const existingPodcasts = await podcastRepo.find({
        where: {
          trackId: In(podcastTrackIds),
        },
      });
      const existingPodcastMap = new Map(
        existingPodcasts.map((p) => [String(p.trackId), p])
      );
      const podcastsToInsert = podcasts
        .filter((r: any) => !existingPodcastMap.has(r.trackId))
        .map((r: any) =>
          podcastRepo.create({
            trackId: String(r.trackId),
            trackName: r.trackName,
            artistName: r.artistName,
          })
        );

      if (podcastsToInsert.length > 0) {
        await podcastRepo.save(podcastsToInsert);
      }

      const episodeTrackIds = episodes.map((e: any) => String(e.trackId));
      const existingEpisodes = await episodeRepo.find({
        where: {
          trackId: In(episodeTrackIds),
        },
      });
      const existingEpisodeMap = new Map(
        existingEpisodes.map((e) => [String(e.trackId), e])
      );

      const newEpisodes = episodes
        .filter((e: any) => !existingEpisodeMap.has(String(e.trackId)))
        .map((e: any) =>
          episodeRepo.create({
            trackId: String(e.trackId),
            trackName: e.trackName,
            artistName: e.artistName,
          })
        );

      if (newEpisodes.length > 0) {
        await episodeRepo.save(newEpisodes);
      }

      const finalPodcasts = [...existingPodcasts, ...podcastsToInsert];
      const finalEpisodes = [...existingEpisodes, ...newEpisodes];

      return res.send({
        podcasts: finalPodcasts,
        episodes: finalEpisodes,
      });
    } catch (error) {
      app.log.error(error);
      return res.code(500).send({ error: "Failed to fetch data from iTunes" });
    }
  });
}
