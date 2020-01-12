import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products/products.component";
import { RouterModule } from "@angular/router";
import { Products } from "./products-routes";

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, RouterModule.forChild(Products)]
})
export class ProductsModule {}
