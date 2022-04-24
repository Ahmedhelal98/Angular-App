import { Injectable } from "@angular/core";
import { SignInData } from "../model/signInData";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  readonly mockUser: SignInData = new SignInData(
    "ahmedmostafa@gmail.com",
    "a123"
  );

  isAuthenticated: any = false;

  constructor(private router: Router) {}

  private checkLogin(login: string): boolean {
    return login === this.mockUser.getLogin();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockUser.getPassword();
  }

  private checkCredentials(signInData: SignInData): boolean {
    return (
      this.checkLogin(signInData.getLogin()) &&
      this.checkPassword(signInData.getPassword())
    );
  }
  authenticate(signInData: SignInData): any {
    if (this.checkCredentials(signInData)) {
      localStorage.setItem(this.isAuthenticated, "true");
      this.router.navigate(["home"]);
      return true;
    }
    // this.isAuthenticated = false;
    // return false;
  }
  if() {}
  logout() {
    this.isAuthenticated = false;
    this.router.navigate([""]);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
