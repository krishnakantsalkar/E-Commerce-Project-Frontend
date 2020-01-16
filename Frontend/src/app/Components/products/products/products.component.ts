import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { productsData } from "../../../Shared/Services/productsServices";
import { Iproducts } from "../../../Shared/Model/products";
// import { IfileUploads } from "../../../Shared/Model/fileUploads";
import { WOW } from "wowjs/dist/wow.min"; //Enable WOW animations

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  public arrivedProducts: Iproducts[];
  public arrivedProducts1: Iproducts[];
  public arrivedProducts2: Iproducts[];
  public arrivedProducts3: Iproducts[];

  // public arrivedFiles: IfileUploads;

  choice = 1;

  constructor(private products: productsData) {}

  ngOnInit() {
    new WOW({ live: false }).init(); //enable WOW animations

    this.products.listProducts().subscribe(data => {
      this.arrivedProducts = data;
      console.log(data);
    });
    this.products.listProducts1().subscribe(data => {
      this.arrivedProducts1 = data;
      console.log(data);
    });
    this.products.listProducts2().subscribe(data => {
      this.arrivedProducts2 = data;
      console.log(data);
    });
    this.products.listProducts3().subscribe(data => {
      this.arrivedProducts3 = data;
      console.log(data);
    });
    // this.products.getImage1().subscribe(data => {
    //   this.arrivedFiles = data;
    // });
  }
  setChoice(choice) {
    this.choice = choice;
  }
}
