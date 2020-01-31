import { Component, OnInit } from "@angular/core";
import { singleproductServices } from "../../../Shared/Services/singleproductServices";
import { Iproducts } from "../../../Shared/Model/products";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-product1",
  templateUrl: "./single-product1.component.html",
  styleUrls: ["./single-product1.component.css"]
})
export class SingleProduct1Component implements OnInit {
  public arrivedProduct1;
  constructor(
    private singleproduct: singleproductServices,
    private AR: ActivatedRoute
  ) {}

  ngOnInit() {
    this.AR.params.subscribe(item => {    // Parameterized routing to get single product
      let id = item["id"];
      this.singleproduct.getProduct1(id).subscribe(item => {
        console.log(item);
        this.arrivedProduct1 = item;
      });
    });
  }
}
