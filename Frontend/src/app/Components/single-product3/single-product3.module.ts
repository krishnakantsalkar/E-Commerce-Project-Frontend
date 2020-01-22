import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SingleProduct3Component } from "./single-product3/single-product3.component";
import { RouterModule } from "@angular/router";
import { singleProduct3 } from "./single-product3-routes";

@NgModule({
  declarations: [SingleProduct3Component],
  imports: [CommonModule, RouterModule.forChild(singleProduct3)]
})
export class SingleProduct3Module {}
