export interface Movie {
  comingSoon?: boolean;
  title: string;
  year: string;
  rating: Rating;
  releaseInfo: ReleaseInfo;
  credits: Credits;
  plot: string;
  metadata: Metadata;
  imdb: ImdbInfo;
  type: string;
  response: string;
  images: string[];
}

interface Rating {
  rated: string;
  metascore: string;
}

interface ReleaseInfo {
  released: string;
  runtime: string;
  genre: string;
  language: string;
  country: string;
}

interface Credits {
  director: string;
  writer: string;
  actors: string;
}

interface Metadata {
  awards: string;
  poster: string;
}

interface ImdbInfo {
  rating: string;
  votes: string;
  id: string;
}
