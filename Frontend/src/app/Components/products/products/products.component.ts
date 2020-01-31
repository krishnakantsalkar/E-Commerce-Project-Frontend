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
  public arrivedProducts2: Iproducts[]; // products
  public arrivedProducts3: Iproducts[];
  public searchText;
  public allProducts: Array<{}>;
  // public add: boolean = false;
  public cartStuff: any[] = [];
  public cartStuff1: any[] = []; // cart implementation
  public cartStuff2: any[] = [];
  public cartStuff3: any[] = [];

  public grid: boolean = false;

  public userLoggedIn: boolean; // To show delete products if user is admin
  // public arrivedFiles: IfileUploads;

  choice = 1;

  public likes: number;
  public activeHeart: boolean;

  public wishlistStuff: any[] = [];
  public wishlistStuff1: any[] = []; // wishlist implementation
  public wishlistStuff2: any[] = [];
  public wishlistStuff3: any[] = [];

  constructor(private products: productsData) {}

  ngOnInit() {
    new WOW({ live: false }).init(); //enable WOW animations

    this.products.listProducts().subscribe(data => {
      // mobiles
      this.arrivedProducts = data;
      console.log(data);
    });
    this.products.listProducts1().subscribe(data => {
      // computers
      this.arrivedProducts1 = data;
      console.log(data);
    });
    this.products.listProducts2().subscribe(data => {
      // Ac
      this.arrivedProducts2 = data;
      console.log(data);
    });
    this.products.listProducts3().subscribe(data => {
      // Fridge
      this.arrivedProducts3 = data;
      console.log(data);
    });
    // this.products.getImage1().subscribe(data => {
    //   this.arrivedFiles = data;
    // });

    let adminRole = JSON.parse(localStorage.getItem("currentUser")); // Get If user is admin or not !
    if (adminRole) {
      this.userLoggedIn = adminRole.admin;
    } else {
      return;
    }

    this.likes = 0;
  }

  setChoice(choice) {
    this.choice = choice;
  }

  getallProds() {
    // All products Section
    this.allProducts = [
      this.arrivedProducts,
      this.arrivedProducts1,
      this.arrivedProducts2,
      this.arrivedProducts3
    ];
    console.log(this.allProducts);
  }
  addtoCart(id) {
    // add to cart for mobiles section
    this.products.cartProduct(id).subscribe(item => {
      console.log(item);
      this.cartStuff.push(item);
      console.log(this.cartStuff);
      localStorage.setItem("product", JSON.stringify(this.cartStuff));
      if (this.cartStuff.length === 3) {
        alert("You can add only 3 products in cart at a time!");
        location.reload();
      }
    });
  }

  addtoCart1(id) {
    // Add to cart for Computer section
    this.products.cartProduct1(id).subscribe(item => {
      console.log(item);
      this.cartStuff1.push(item);
      console.log(this.cartStuff1);
      localStorage.setItem("product1", JSON.stringify(this.cartStuff1));
      if (this.cartStuff1.length === 3) {
        alert("You can add only 3 products in cart at a time!");
        location.reload();
      }
    });
  }

  addtoCart2(id) {
    // add to cart for AC section
    this.products.cartProduct2(id).subscribe(item => {
      console.log(item);
      this.cartStuff2.push(item);
      console.log(this.cartStuff2);
      localStorage.setItem("product2", JSON.stringify(this.cartStuff2));
      if (this.cartStuff2.length === 3) {
        alert("You can add only 3 products in cart at a time!");
        location.reload();
      }
    });
  }

  addtoCart3(id) {
    // add to cart for Fridge section
    this.products.cartProduct3(id).subscribe(item => {
      console.log(item);
      this.cartStuff3.push(item);
      console.log(this.cartStuff3);
      localStorage.setItem("product3", JSON.stringify(this.cartStuff3));
      if (this.cartStuff3.length === 3) {
        alert("You can add only 3 products in cart at a time!");
        location.reload();
      }
    });
  }
  // added() {
  //   this.add = !this.add;
  // }

  list() {
    // list to grid implementation
    this.grid = !this.grid;
  }

  delete(id) {
    // delete product by Admin only
    this.products.deleteProduct(id).subscribe(
      item => {
        console.log("deleted successfully");
        alert("Product Deleted!");
        location.reload();
      },
      err => {
        console.log(err.error.message);
        alert("You are not Admin!");
      }
    );
  }

  like() {
    this.likes++;
  }
  dislike() {
    this.likes--;
    if (this.likes < 0) {
      this.likes = 0;
    }
    return this.likes;
  }

  likeHeart() {
    this.activeHeart = !this.activeHeart;
  }

  addtoWishlist(id) {
    this.products.wishlistProduct(id).subscribe(item => {
      console.log(item);
      this.wishlistStuff.push(item);
      console.log(this.wishlistStuff);
      localStorage.setItem("wishlist", JSON.stringify(this.wishlistStuff));
      alert("Added to Wishlist");
      if (this.wishlistStuff.length === 3) {
        location.reload();
      }
    });
  }

  addtoWishlist1(id) {
    this.products.wishlistProduct1(id).subscribe(item => {
      console.log(item);
      this.wishlistStuff1.push(item);
      console.log(this.wishlistStuff1);
      localStorage.setItem("wishlist1", JSON.stringify(this.wishlistStuff1));
      alert("Added to Wishlist");
      if (this.wishlistStuff1.length === 3) {
        location.reload();
      }
    });
  }

  addtoWishlist2(id) {
    this.products.wishlistProduct2(id).subscribe(item => {
      console.log(item);
      this.wishlistStuff2.push(item);
      console.log(this.wishlistStuff2);
      localStorage.setItem("wishlist2", JSON.stringify(this.wishlistStuff2));
      alert("Added to Wishlist");
      if (this.wishlistStuff2.length === 3) {
        location.reload();
      }
    });
  }

  addtoWishlist3(id) {
    this.products.wishlistProduct3(id).subscribe(item => {
      console.log(item);
      this.wishlistStuff3.push(item);
      console.log(this.wishlistStuff3);
      localStorage.setItem("wishlist3", JSON.stringify(this.wishlistStuff3));
      alert("Added to Wishlist");
      if (this.wishlistStuff3.length === 3) {
        location.reload();
      }
    });
  }
}
