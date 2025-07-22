import { Entity, PrimaryColumn, Column } from "typeorm";
import { NullableColumn } from "../decorators/nullable-column";

@Entity()
export class Episode {
  @PrimaryColumn({ type: "bigint" })
  trackId: number;

  @Column()
  trackName: string;

  @NullableColumn()
  episodeGuid: string;

  @NullableColumn()
  description: string;

  @NullableColumn()
  shortDescription: string;

  @NullableColumn()
  releaseDate: string;

  @NullableColumn()
  feedUrl: string;

  @NullableColumn({ type: "bigint" })
  collectionId: number;

  @NullableColumn()
  collectionName: string;

  @NullableColumn()
  artworkUrl600: string;

  @NullableColumn()
  artworkUrl160: string;

  @NullableColumn()
  artworkUrl60: string;

  @NullableColumn()
  country: string;

  @NullableColumn()
  collectionViewUrl: string;

  @NullableColumn()
  trackViewUrl: string;

  @NullableColumn()
  contentAdvisoryRating: string;

  @NullableColumn()
  episodeUrl: string;

  @NullableColumn()
  previewUrl: string;

  @NullableColumn()
  episodeFileExtension: string;

  @NullableColumn()
  episodeContentType: string;

  @NullableColumn({ type: "bigint" })
  trackTimeMillis: number;

  @Column("text", { array: true, nullable: true })
  genres: { name: string; id: string }[];

  @Column("text", { array: true, nullable: true })
  artistIds: string[];

  @NullableColumn()
  closedCaptioning: string;

  @NullableColumn()
  wrapperType: string;

  @NullableColumn()
  kind: string;
}
