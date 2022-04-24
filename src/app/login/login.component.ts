import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthenticationService } from "../services/authentication.service";
import { SignInData } from "../model/signInData";
import { Router } from "@angular/router";

@Component({
  selector: "cf-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isFormValid = false;
  areCredentialsInvalid = false;

  constructor(
    private authenticationService: AuthenticationService,
    private route: Router
  ) {}

  ngOnInit() {
    localStorage.removeItem(this.authenticationService.isAuthenticated);
  }

  onSubmit(signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      localStorage.setItem(this.authenticationService.isAuthenticated, "true");
      this.authenticationService.isAuthenticated = localStorage.getItem(
        this.authenticationService.isAuthenticated
      );
      this.route.navigate(["/home"]);
    }
    this.checkCredentials(signInForm);
  }
  private checkCredentials(signInForm: NgForm) {
    const signInData = new SignInData(
      signInForm.value.login,
      signInForm.value.password
    );
    if (!this.authenticationService.authenticate(signInData)) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }
}
