import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products/products.component";
import { RouterModule } from "@angular/router";
import { Products } from "./products-routes";
import { FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Products),
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class ProductsModule {}
