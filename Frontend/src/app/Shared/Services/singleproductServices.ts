import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Iproducts } from "../Model/products";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class singleproductServices {
  public header: HttpHeaders;
  public getProductById1: string =
    "http://localhost:4500/api/products/getProductsbyID/";
  public getProductById2: string =
    "http://localhost:4500/api/products/getProductsbyID/5de002acdb2af214386b5d15";
  public getProductById3: string =
    "http://localhost:4500/api/products/getProductsbyID/5de00325b0574e40085c2998";

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ "Content-Type": "application/json" });
  }

  getProduct1(id): Observable<Iproducts> {
    return this.http.get<Iproducts>(this.getProductById1 + id);
  }
  getProduct2(): Observable<Iproducts> {
    return this.http.get<Iproducts>(this.getProductById2);
  }
  getProduct3(): Observable<Iproducts> {
    return this.http.get<Iproducts>(this.getProductById3);
  }
}
