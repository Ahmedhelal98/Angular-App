import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "details/:id",
        component: MovieDetailsComponent,
      },
    ],
  },
  { path: "**", component: LoginComponent },
];

// const routes: Routes = [
//   //{ path: "", redirectTo: "main" },
//   { path: "", component: LoginComponent },
//   { path: "home", component: HomeComponent },
//   {
//     path: "details/:id",
//     component: MovieDetailsComponent,
//   },
//   { path: "**", component: LoginComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
