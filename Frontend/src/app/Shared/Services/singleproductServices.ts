import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Iproducts } from "../Model/products";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class singleproductServices {
  public header: HttpHeaders;
  public getProductById1: string =
    "http://localhost:4500/api/products/getProductsbyID/";

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ "Content-Type": "application/json" });
  }

  getProduct1(id): Observable<Iproducts> {
    return this.http.get<Iproducts>(this.getProductById1 + id);
  }
}
