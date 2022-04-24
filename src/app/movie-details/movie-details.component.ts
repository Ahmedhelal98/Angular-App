import { Component, Input, OnInit } from "@angular/core";
import { HomeComponent } from "../home/home.component";
import { ActivatedRoute, Params } from "@angular/router";
import { MovieService } from "../movie.service";
import { movieDetailsModel } from "../services/movieModel";
import { Router } from "@angular/router";
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
    private route: ActivatedRoute,
    private isAuthicated: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAuthicated.isAuthenticated = localStorage.getItem(
      this.isAuthicated.isAuthenticated
    );
    if (this.isAuthicated.isAuthenticated) {
      this.id = this.route.snapshot.paramMap.get("id");
      this.movieService.getMovieById(this.id).subscribe((response) => {
        this.movie = response;
      });
    } else {
      this.router.navigate([""]);
    }
  }
}
