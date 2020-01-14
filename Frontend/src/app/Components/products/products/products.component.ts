import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { productsData } from "../../../Shared/Services/productsServices";
import { Iproducts } from "../../../Shared/Model/products";
// import { IfileUploads } from "../../../Shared/Model/fileUploads";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  public arrivedProducts: Iproducts[];
  // public arrivedFiles: IfileUploads;

  constructor(private products: productsData) {}

  ngOnInit() {
    this.products.listProducts().subscribe(data => {
      this.arrivedProducts = data;
      console.log(data);
    });
    // this.products.getImage1().subscribe(data => {
    //   this.arrivedFiles = data;
    // });
  }
}
