import { Route } from "@angular/router";
import { SingleProduct4Component } from "./single-product4/single-product4.component";

export const singleProduct4: Route[] = [
  // child routing and lazy loading
  {
    path: "",
    component: SingleProduct4Component
  }
];
