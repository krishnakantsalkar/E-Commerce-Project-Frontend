import { Route } from "@angular/router";
import { SingleProduct1Component } from "./single-product1/single-product1.component";

export const singleProduct1: Route[] = [
  // child routing and lazy loading
  {
    path: "",
    component: SingleProduct1Component
  }
];
