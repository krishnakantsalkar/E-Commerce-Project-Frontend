import { Route } from "@angular/router";
import { RssfeedComponent } from "./rssfeed/rssfeed.component";

export const rssfeed: Route[] = [     // child routing and lazy loading
  {
    path: "",
    component: RssfeedComponent
  }
];
