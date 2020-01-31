import { Route } from "@angular/router";
import { SingleProduct2Component } from "./single-product2/single-product2.component";

export const singleProduct2: Route[] = [      // child routing and lazy loading
  {
    path: "",
    component: SingleProduct2Component
  }
];
