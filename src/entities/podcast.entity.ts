// src/entities/podcast.entity.ts
import { Entity, PrimaryColumn } from "typeorm";
import { NullableColumn } from "../decorators/nullable-column";

@Entity()
export class Podcast {
  @PrimaryColumn({ type: "text" })
  id: string;

  @NullableColumn()
  title: string;

  @NullableColumn()
  author: string;

  @NullableColumn()
  imageUrl: string;
}
