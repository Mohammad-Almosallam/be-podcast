// src/entities/episode.entity.ts
import { Entity, PrimaryColumn } from "typeorm";
import { NullableColumn } from "../decorators/nullable-column";

@Entity()
export class Episode {
  @PrimaryColumn({ type: "text" }) // or just omit type, string is default
  id: string;

  @NullableColumn()
  title: string;

  @NullableColumn()
  description: string;

  @NullableColumn()
  author: string;

  @NullableColumn()
  imageUrl: string;

  @NullableColumn()
  publishedAt: string;

  @NullableColumn()
  duration: string;
}
