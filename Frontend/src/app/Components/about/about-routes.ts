import { Route } from "@angular/router";
import { AboutComponent } from "./about/about.component";

export const About: Route[] = [
  // child routing & lazy loading
  {
    path: "",
    component: AboutComponent
  }
];
