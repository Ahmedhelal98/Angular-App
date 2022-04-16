export interface movieModel {
  page: number;
  results: Array<object>;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: Array<number>;
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  total_results: number;
  total_pages: number;
}

export interface movieDetailsModel {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  id: number;
  overview: string;
  original_title: string;
}
