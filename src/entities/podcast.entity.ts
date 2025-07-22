// src/entities/podcast.entity.ts
import { Entity, PrimaryColumn } from "typeorm";
import { NullableColumn } from "../decorators/nullable-column";

@Entity()
export class Podcast {
  @PrimaryColumn({ type: "text" }) // or just omit type, string is default
  trackId: string;

  @NullableColumn()
  trackName: string; // title

  @NullableColumn()
  artistName: string; // author
}
