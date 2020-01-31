import { Component, OnInit } from "@angular/core";
import { singleproductServices } from "../../../Shared/Services/singleproductServices";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-product4",
  templateUrl: "./single-product4.component.html",
  styleUrls: ["./single-product4.component.css"]
})
export class SingleProduct4Component implements OnInit {
  public arrivedProduct4;
  constructor(
    private singleproduct: singleproductServices,
    private AR: ActivatedRoute
  ) {}

  ngOnInit() {
    this.AR.params.subscribe(item => {           // Parameterized routing to get single product
      let id = item["id"];
      this.singleproduct.getProduct4(id).subscribe(item => {
        console.log(item);
        this.arrivedProduct4 = item;
      });
    });
  }
}
