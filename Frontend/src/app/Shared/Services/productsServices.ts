import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Iproducts } from "../Model/products";
import { Observable } from "rxjs";
// import { IfileUploads } from "../Model/fileUploads";

@Injectable({ providedIn: "root" })
export class productsData {
  public header: HttpHeaders;
  public productsApiAll: string =
    "http://localhost:4500/api/products/getProducts";
  public productsApibyID: string =
    "https://localhost:4500/api/products/getProductsByID/:id";

  // public product1: any =
  //   "http://localhost:4500/api/file/getFilesById/5e1d99e358778ea7042d6452";
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ "Content-Type": "application/json" });
  }

  listProducts(): Observable<Iproducts[]> {
    return this.http.get<Iproducts[]>(this.productsApiAll);
  }
  // getImage1(): Observable<IfileUploads> {
  //   return this.http.get<IfileUploads>(this.product1);
  // }
}
