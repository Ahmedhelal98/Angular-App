import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { movieDetailsModel, movieModel } from "./services/movieModel";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "https://api.themoviedb.org/3";
    this.apiKey = "33a042ea56fc03031d585e17c53ffeda";
    this.language = "&language=en-US";

    //test =
    //"https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US"
  }

  getTopRated(page: number): Observable<movieModel> {
    return this.httpClient.get<movieModel>(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=33a042ea56fc03031d585e17c53ffeda&language=en-US&page=1"
    );
  }

  getMovieById(id: any): Observable<any> {
    return this.httpClient.get<any>(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=33a042ea56fc03031d585e17c53ffeda"
    );
  }

  //getMovieById(id: number): Observable<>;
}
