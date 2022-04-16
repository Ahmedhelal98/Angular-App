import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./guards/auth.guard";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: "details/:id",
    component: MovieDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: "**", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
