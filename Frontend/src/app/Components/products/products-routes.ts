import { Route } from "@angular/router";
import { ProductsComponent } from "./products/products.component";

export const Products: Route[] = [
  // child routing and lazy loading
  {
    path: "",
    component: ProductsComponent
  }
];
