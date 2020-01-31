import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-wishlist",
  templateUrl: "./wishlist.component.html",
  styleUrls: ["./wishlist.component.css"]
})
export class WishlistComponent implements OnInit {
  public wishlistItems;   
  public wishlistItems1;       // store wishlist items in these properties
  public wishlistItems2;
  public wishlistItems3;
  constructor() {}

  ngOnInit() {
    this.wishlistItems = JSON.parse(localStorage.getItem("wishlist"));

    this.wishlistItems1 = JSON.parse(localStorage.getItem("wishlist1"));    // get wishlist items stored in storage

    this.wishlistItems2 = JSON.parse(localStorage.getItem("wishlist2"));

    this.wishlistItems3 = JSON.parse(localStorage.getItem("wishlist3"));
  }

  removeItem() {
    localStorage.removeItem("wishlist");
    localStorage.removeItem("wishlist1");
    localStorage.removeItem("wishlist2");    //remove all wishlist items together
    localStorage.removeItem("wishlist3");
    location.reload();
  }

  removeItem1() {
    localStorage.removeItem("wishlist");
    location.reload();
  }
  removeItem2() {
    localStorage.removeItem("wishlist1");  // remove wishlist items separately
    location.reload();
  }
  removeItem3() {
    localStorage.removeItem("wishlist2");
    location.reload();
  }
  removeItem4() {
    localStorage.removeItem("wishlist3");
    location.reload();
  }
}
