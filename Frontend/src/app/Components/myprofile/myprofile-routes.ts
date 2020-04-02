import { Route } from "@angular/router";
import { MyprofileComponent } from "./myprofile/myprofile.component";

export const myprofile: Route[] = [
  // child routing and lazy loading
  {
    path: "",
    component: MyprofileComponent
  }
];
