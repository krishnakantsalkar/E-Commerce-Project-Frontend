import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { RouterModule } from "@angular/router";
import { wishlist } from "./wishlist-routes";

@NgModule({
  declarations: [WishlistComponent],
  imports: [CommonModule, RouterModule.forChild(wishlist)]
})
export class WishlistModule {}
