import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SingleProduct4Component } from "./single-product4/single-product4.component";
import { RouterModule } from "@angular/router";
import { singleProduct4 } from "./single-product4-routes";

@NgModule({
  declarations: [SingleProduct4Component],
  imports: [CommonModule, RouterModule.forChild(singleProduct4)]
})
export class SingleProduct4Module {}
