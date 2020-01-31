import { Route } from "@angular/router";
import { CartComponent } from "./cart/cart.component";

export const cart: Route[] = [        // child routing and lazy loading
  {
    path: "",
    component: CartComponent
  }
];
