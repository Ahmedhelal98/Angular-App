import { Component, Input, OnInit } from "@angular/core";
import { HomeComponent } from "../home/home.component";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { MovieService } from "../movie.service";
import { movieDetailsModel } from "../services/movieModel";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "cf-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"],
})
export class MovieDetailsComponent implements OnInit {
  movie: any;

  @Input()
  id: any;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.movieService.getMovieById(this.id).subscribe((response) => {
      this.movie = response;
    });
  }
}
