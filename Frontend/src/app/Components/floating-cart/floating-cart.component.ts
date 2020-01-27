import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-floating-cart",
  templateUrl: "./floating-cart.component.html",
  styleUrls: ["./floating-cart.component.css"]
})
export class FloatingCartComponent implements OnInit {
  public cartItems;
  public cartCount;
  public count: number;
  constructor() {}

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem("product"));
    console.log(this.cartItems);
    this.count = this.cartItems.length;
  }

  removefromCart() {
    localStorage.removeItem("product");
    location.reload();
  }
}
