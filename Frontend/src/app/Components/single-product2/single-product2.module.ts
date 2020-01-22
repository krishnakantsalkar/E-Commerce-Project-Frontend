import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SingleProduct2Component } from "./single-product2/single-product2.component";
import { RouterModule } from "@angular/router";
import { singleProduct2 } from "./single-product2-routes";

@NgModule({
  declarations: [SingleProduct2Component],
  imports: [CommonModule, RouterModule.forChild(singleProduct2)]
})
export class SingleProduct2Module {}
