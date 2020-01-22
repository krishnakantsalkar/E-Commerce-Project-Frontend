import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SingleProduct1Component } from "./single-product1/single-product1.component";
import { RouterModule } from "@angular/router";
import { singleProduct1 } from "./single-product1-routes";

@NgModule({
  declarations: [SingleProduct1Component],
  imports: [CommonModule, RouterModule.forChild(singleProduct1)]
})
export class SingleProduct1Module {}
