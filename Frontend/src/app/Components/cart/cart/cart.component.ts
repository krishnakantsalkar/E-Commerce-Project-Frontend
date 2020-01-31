import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  public cartPageItems; //get cart values stored in local storage in these
  public cartPageItems1;
  public cartPageItems2;
  public cartPageItems3;

  // public removecartPageItems: any[];

  public prices1: any[] = []; //store price values of individual sections in these arrays
  public prices2: any[] = [];
  public prices3: any[] = [];
  public prices4: any[] = [];

  public total1; //total the values inside indvidual arrays and store here
  public total2;
  public total3;
  public total4;

  constructor() {}

  ngOnInit() {
    this.cartPageItems = JSON.parse(localStorage.getItem("product"));

    this.cartPageItems1 = JSON.parse(localStorage.getItem("product1")); // load cart items from storage

    this.cartPageItems2 = JSON.parse(localStorage.getItem("product2"));

    this.cartPageItems3 = JSON.parse(localStorage.getItem("product3"));

    this.checkPrice1();

    this.checkPrice2();

    this.checkPrice3(); //check the price functions and store

    this.checkPrice4();

    this.sum();
  }

  removeItem() {
    localStorage.removeItem("product"); // remove added to cart items
    localStorage.removeItem("product1");
    localStorage.removeItem("product2");
    localStorage.removeItem("product3");
    location.reload();
  }

  sum() {
    this.total1 = this.prices1.reduce((a, b) => a + b, 0); //do sum of all values inside individual arrays ,else 0
    console.log(this.total1);
    this.total2 = this.prices2.reduce((a, b) => a + b, 0);
    console.log(this.total2);
    this.total3 = this.prices3.reduce((a, b) => a + b, 0);
    console.log(this.total3);
    this.total4 = this.prices4.reduce((a, b) => a + b, 0);
    console.log(this.total4);
  }

  checkPrice1() {
    //mobiles section get price values
    if (this.cartPageItems) {
      for (let c of this.cartPageItems) {
        this.prices1.push(c.price);
        console.log(this.prices1);
      }
    } else {
      return;
    }
  }

  checkPrice2() {
    //computers section get price values
    if (this.cartPageItems1) {
      for (let c1 of this.cartPageItems1) {
        this.prices2.push(c1.price);
        console.log(this.prices2);
      }
    } else {
      return;
    }
  }

  checkPrice3() {
    //AC section get price values
    if (this.cartPageItems2) {
      for (let c2 of this.cartPageItems2) {
        this.prices3.push(c2.price);
        console.log(this.prices3);
      }
    } else {
      return;
    }
  }

  checkPrice4() {
    //Fridge section get price values
    if (this.cartPageItems3) {
      for (let c3 of this.cartPageItems3) {
        this.prices4.push(c3.price);
        console.log(this.prices4);
      }
    } else {
      return;
    }
  }
}
