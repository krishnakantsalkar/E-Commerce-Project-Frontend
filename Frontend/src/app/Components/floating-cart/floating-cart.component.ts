import { Component, OnInit } from "@angular/core";
import { userLoginData } from "../../Shared/Services/userLoginService";

@Component({
  selector: "app-floating-cart",
  templateUrl: "./floating-cart.component.html",
  styleUrls: ["./floating-cart.component.css"]
})
export class FloatingCartComponent implements OnInit {
  public cartItems;
  public cartItems1;
  public cartItems2;
  public cartItems3;
  public cartCount;
  public count: number;
  public count1: number;
  public count2: number;
  public count3: number;

  public checkStatus: any;
  constructor(private logoutMethod: userLoginData) {}

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem("product"));
    console.log(this.cartItems);
    if (this.cartItems) {
      this.count = this.cartItems.length;
      console.log(this.count);
    } else {
      console.log("cart empty");
    }

    this.cartItems1 = JSON.parse(localStorage.getItem("product1"));
    console.log(this.cartItems1);
    if (this.cartItems1) {
      this.count1 = this.cartItems1.length;
    } else {
      console.log("cart empty");
    }

    this.cartItems2 = JSON.parse(localStorage.getItem("product2"));
    console.log(this.cartItems2);
    if (this.cartItems2) {
      this.count2 = this.cartItems2.length;
    } else {
      console.log("cart empty");
    }

    this.cartItems3 = JSON.parse(localStorage.getItem("product3"));
    console.log(this.cartItems3);
    if (this.cartItems3) {
      this.count3 = this.cartItems3.length;
    } else {
      console.log("cart empty");
    }

    this.logoutMethod.currentUsers.subscribe(data => {
      this.checkStatus = data;
    });
  }

  removefromCart() {
    localStorage.removeItem("product");

    location.reload();
  }

  removefromCart1() {
    localStorage.removeItem("product1");

    location.reload();
  }

  removefromCart2() {
    localStorage.removeItem("product2");

    location.reload();
  }

  removefromCart3() {
    localStorage.removeItem("product3");

    location.reload();
  }
}
