import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Iproducts } from "../Model/products";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class singleproductServices {
  public header: HttpHeaders;
  public getProductById1: string =
    "http://localhost:4500/api/products/getProductsbyID/";  // get mobiles by id

  public getProductById2: string =
    "http://localhost:4500/api/products/getProductsbyID1/";  // get computers by id

  public getProductById3: string =
    "http://localhost:4500/api/products/getProductsbyID2/";  // get AC by id

  public getProductById4: string =
    "http://localhost:4500/api/products/getProductsbyID3/";   // get fridge by id

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ "Content-Type": "application/json" });
  }

  getProduct1(id): Observable<Iproducts> {
    return this.http.get<Iproducts>(this.getProductById1 + id);
  }

  getProduct2(id): Observable<Iproducts> {
    return this.http.get<Iproducts>(this.getProductById2 + id);    // get sectionwise single products by id 
  }

  getProduct3(id): Observable<Iproducts> {
    return this.http.get<Iproducts>(this.getProductById3 + id);
  }

  getProduct4(id): Observable<Iproducts> {
    return this.http.get<Iproducts>(this.getProductById4 + id);
  }
}
