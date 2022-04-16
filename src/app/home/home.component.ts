import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";
import { movieModel } from "../services/movieModel";

export class Movie {
  constructor(
    page: number,
    results: Array<[{}]>,
    poster_path: string,
    overview: String,
    release_date: string,
    id: number,
    title: string
  ) {}
}

//API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=33a042ea56fc03031d585e17c53ffeda&language=en-US&page=1";

@Component({
  selector: "cf-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  topRated: any;
  poster: any;
  movieId: number;
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getTopRated(1).subscribe((response) => {
      console.log(response);
      this.topRated = response.results;
      this.poster = response.poster_path;
      this.movieId = response.id;
      console.log(this.topRated);
    });
  }

  // getMovies() {
  //   this.httpclient
  //     .get<any>(
  //       "https://api.themoviedb.org/3/movie/top_rated?api_key=33a042ea56fc03031d585e17c53ffeda&language=en-US&page=1"
  //     )
  //     .subscribe((response) => {
  //       console.log(response);
  //       this.movies = response;
  //       console.log(this.movies.results[5]);
  //       // console.log(this.movies.results);
  //     });
}
