import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Iproducts } from "../Model/products";
import { Observable } from "rxjs";
// import { IfileUploads } from "../Model/fileUploads";

@Injectable({ providedIn: "root" })
export class productsData {
  public header: HttpHeaders;

  public productsApiAll: string =
    "http://localhost:4500/api/products/getProducts"; // Mobile Phones
  public productsApibyID: string =
    "https://localhost:4500/api/products/getProductsByID/:id";

  public products1ApiAll: string =
    "http://localhost:4500/api/products/getProducts1"; //Computers
  public products1ApibyID: string =
    "https://localhost:4500/api/products/getProductsByID1/:id";

  public products2ApiAll: string =
    "http://localhost:4500/api/products/getProducts2"; // Air Conditioner
  public products2ApibyID: string =
    "https://localhost:4500/api/products/getProductsByID2/:id";

  public products3ApiAll: string =
    "http://localhost:4500/api/products/getProducts3"; // Refrigerator
  public products3ApibyID: string =
    "https://localhost:4500/api/products/getProductsByID3/:id";

  // public product1: any =
  //   "http://localhost:4500/api/file/getFilesById/5e1d99e358778ea7042d6452";
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ "Content-Type": "application/json" });
  }

  listProducts(): Observable<Iproducts[]> {
    return this.http.get<Iproducts[]>(this.productsApiAll);
  }

  listProducts1(): Observable<Iproducts[]> {
    return this.http.get<Iproducts[]>(this.products1ApiAll);
  }

  listProducts2(): Observable<Iproducts[]> {
    return this.http.get<Iproducts[]>(this.products2ApiAll);
  }

  listProducts3(): Observable<Iproducts[]> {
    return this.http.get<Iproducts[]>(this.products3ApiAll);
  }
  // getImage1(): Observable<IfileUploads> {
  //   return this.http.get<IfileUploads>(this.product1);
  // }
}