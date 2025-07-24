import { Entity, PrimaryColumn } from "typeorm";
import { NullableColumn } from "../decorators/nullable-column";

@Entity()
export class Episode {
  @PrimaryColumn({ type: "text" })
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

  @NullableColumn()
  audioUrl: string;
}
