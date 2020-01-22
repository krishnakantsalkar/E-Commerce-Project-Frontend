import { Component, OnInit } from "@angular/core";
import { singleproductServices } from "../../../Shared/Services/singleproductServices";
import { Iproducts } from "../../../Shared/Model/products";

@Component({
  selector: "app-single-product2",
  templateUrl: "./single-product2.component.html",
  styleUrls: ["./single-product2.component.css"]
})
export class SingleProduct2Component implements OnInit {
  public arrivedProduct2;

  constructor(private singleproduct: singleproductServices) {}

  ngOnInit() {
    this.singleproduct.getProduct2().subscribe(item => {
      console.log(item);
      this.arrivedProduct2 = item;
    });
  }
}
