import { Route } from "@angular/router";
import { WishlistComponent } from "./wishlist/wishlist.component";

export const wishlist: Route[] = [
  // child routing and lazy loading
  {
    path: "",
    component: WishlistComponent
  }
];
