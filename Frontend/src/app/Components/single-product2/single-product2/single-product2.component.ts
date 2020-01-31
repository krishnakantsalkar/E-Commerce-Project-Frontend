import { Component, OnInit } from "@angular/core";
import { singleproductServices } from "../../../Shared/Services/singleproductServices";
import { Iproducts } from "../../../Shared/Model/products";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-product2",
  templateUrl: "./single-product2.component.html",
  styleUrls: ["./single-product2.component.css"]
})
export class SingleProduct2Component implements OnInit {
  public arrivedProduct2;

  constructor(
    private singleproduct: singleproductServices,
    private AR: ActivatedRoute
  ) {}

  ngOnInit() {
    this.AR.params.subscribe(item => {         // Parameterized routing to get single product
      let id = item["id"];
      this.singleproduct.getProduct2(id).subscribe(item => {
        console.log(item);
        this.arrivedProduct2 = item;
      });
    });
  }
}
