import { Entity, PrimaryColumn } from "typeorm";
import { NullableColumn } from "../decorators/nullable-column";

@Entity()
export class Podcast {
  @PrimaryColumn({ type: "bigint" })
  trackId: number;

  @NullableColumn()
  wrapperType: string;

  @NullableColumn()
  kind: string;

  @NullableColumn({ type: "bigint" })
  artistId: number;

  @NullableColumn({ type: "bigint" })
  collectionId: number;

  @NullableColumn()
  artistName: string;

  @NullableColumn()
  collectionName: string;

  @NullableColumn()
  trackName: string;

  @NullableColumn()
  collectionCensoredName: string;

  @NullableColumn()
  trackCensoredName: string;

  @NullableColumn()
  artistViewUrl: string;

  @NullableColumn()
  collectionViewUrl: string;

  @NullableColumn()
  feedUrl: string;

  @NullableColumn()
  trackViewUrl: string;

  @NullableColumn()
  artworkUrl30: string;

  @NullableColumn()
  artworkUrl60: string;

  @NullableColumn()
  artworkUrl100: string;

  @NullableColumn("float")
  collectionPrice: number;

  @NullableColumn("float")
  trackPrice: number;

  @NullableColumn("float")
  collectionHdPrice: number;

  @NullableColumn({ type: "timestamp" })
  releaseDate: Date;

  @NullableColumn()
  collectionExplicitness: string;

  @NullableColumn()
  trackExplicitness: string;

  @NullableColumn()
  trackCount: number;

  @NullableColumn()
  trackTimeMillis: number;

  @NullableColumn()
  country: string;

  @NullableColumn()
  currency: string;

  @NullableColumn()
  primaryGenreName: string;

  @NullableColumn()
  contentAdvisoryRating: string;

  @NullableColumn()
  artworkUrl600: string;

  @NullableColumn({ type: "text", array: true })
  genreIds: string[];

  @NullableColumn({ type: "text", array: true })
  genres: string[];
}
