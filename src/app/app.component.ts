import { Component } from "@angular/core";
import { AuthenticationService } from "./services/authentication.service";
import { Router } from "@angular/router";
@Component({
  selector: "cf-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "login-form";

  constructor(
    private authenticationService: AuthenticationService,
    private isAuthticaed: AuthenticationService,
    private router: Router
  ) {}

  logOut() {
    localStorage.removeItem(this.isAuthticaed.isAuthenticated);
    this.router.navigate([""]);
  }
}
