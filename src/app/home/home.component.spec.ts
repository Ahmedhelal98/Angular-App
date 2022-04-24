import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { MovieService } from "../movie.service";

describe("HomeComponent", () => {
  let testMovieServie: MovieService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [MovieService],
    });
  });

  // Test if the Home component is correctly initialized

  it("should Create a Home Component", () => {
    let fixture = TestBed.createComponent(HomeComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // Check for the Service
  it("Should Check The Service", () => {
    testMovieServie = TestBed.get(MovieService);
    expect(testMovieServie instanceof MovieService).toBeTruthy();
  });
});
