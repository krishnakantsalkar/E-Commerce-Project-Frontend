import { Component, OnInit } from "@angular/core";
import { singleproductServices } from "../../../Shared/Services/singleproductServices";
import { Iproducts } from "../../../Shared/Model/products";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-product3",
  templateUrl: "./single-product3.component.html",
  styleUrls: ["./single-product3.component.css"]
})
export class SingleProduct3Component implements OnInit {
  public arrivedProduct3;
  constructor(
    private singleproduct: singleproductServices,
    private AR: ActivatedRoute
  ) {}

  ngOnInit() {
    this.AR.params.subscribe(item => {
      let id = item["id"];
      this.singleproduct.getProduct3(id).subscribe(item => {
        console.log(item);
        this.arrivedProduct3 = item;
      });
    });
  }
}
