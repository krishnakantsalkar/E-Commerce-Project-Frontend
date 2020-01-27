import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  public cartPageItems;
  public cartPageItems1;
  public cartPageItems2;
  public cartPageItems3;

  public removecartPageItems: any[];

  constructor() {}

  ngOnInit() {
    this.cartPageItems = JSON.parse(localStorage.getItem("product"));

    this.cartPageItems1 = JSON.parse(localStorage.getItem("product1"));

    this.cartPageItems2 = JSON.parse(localStorage.getItem("product2"));

    this.cartPageItems3 = JSON.parse(localStorage.getItem("product3"));
  }

  removeItem() {
    localStorage.removeItem("product");
    localStorage.removeItem("product1");
    localStorage.removeItem("product2");
    localStorage.removeItem("product3");
    location.reload();
  }
}
