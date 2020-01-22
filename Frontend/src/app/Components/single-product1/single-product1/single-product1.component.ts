import { Component, OnInit } from "@angular/core";
import { singleproductServices } from "../../../Shared/Services/singleproductServices";
import { Iproducts } from "../../../Shared/Model/products";

@Component({
  selector: "app-single-product1",
  templateUrl: "./single-product1.component.html",
  styleUrls: ["./single-product1.component.css"]
})
export class SingleProduct1Component implements OnInit {
  public arrivedProduct1;
  constructor(private singleproduct: singleproductServices) {}

  ngOnInit() {
    this.singleproduct.getProduct1().subscribe(item => {
      console.log(item);
      this.arrivedProduct1 = item;
    });
  }
}
