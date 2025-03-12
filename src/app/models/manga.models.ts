export interface Manga {
  mal_id: number;
  title: string;
  title_english?: string;
  title_japanese?: string;
  images: {
    jpg: { image_url: string };
    webp: { image_url: string };
  };
  score: number;
  members: number;
  popularity: number;
  synopsis: string;
  status: string;
  chapters?: number;
  volumes?: number;
  genres: { mal_id: number; name: string }[];
  themes?: { mal_id: number; name: string }[];
}
