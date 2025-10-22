export interface IGenre {
  id: number;
  name: string;
}

export interface IProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

/**
 * Base movie type (used in trending list or simple previews)
 */
export interface IMovie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  backdrop_path: string | null;
  popularity: number;
  vote_average: number;
  vote_count: number;
  genre_ids?: number[];
  media_type?: string;
  adult: boolean;
  video: boolean;
  original_language: string;
}

/**
 * Extended detailed movie type (used in Movie Details page)
 */
export interface IMovieDetails extends IMovie {
  budget: number;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  homepage: string | null;
  imdb_id: string | null;
  genres: IGenre[];
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  spoken_languages: ISpokenLanguage[];
}