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
    "http://localhost:4500/api/products/getProductsByID/";

  public products1ApiAll: string =
    "http://localhost:4500/api/products/getProducts1"; //Computers
  public products1ApibyID: string =
    "http://localhost:4500/api/products/getProductsByID1/";

  public products2ApiAll: string =
    "http://localhost:4500/api/products/getProducts2"; // Air Conditioner
  public products2ApibyID: string =
    "http://localhost:4500/api/products/getProductsByID2/";

  public products3ApiAll: string =
    "http://localhost:4500/api/products/getProducts3"; // Refrigerator
  public products3ApibyID: string =
    "http://localhost:4500/api/products/getProductsByID3/";

  public deleteProductByID: string =
    "http://localhost:4500/api/products/deleteProductsbyID/";

  // public product1: any =
  //   "http://localhost:4500/api/file/getFilesById/5e1d99e358778ea7042d6452";
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      "Content-Type": "application/json",
      "x-auth-token": JSON.parse(localStorage.getItem("currentToken"))
    });
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
  cartProduct(id): Observable<Iproducts> {
    return this.http.get<Iproducts>(this.productsApibyID + id);
  }

  cartProduct1(id): Observable<Iproducts> {
    return this.http.get<Iproducts>(this.products1ApibyID + id);
  }

  cartProduct2(id): Observable<Iproducts> {
    return this.http.get<Iproducts>(this.products2ApibyID + id);
  }

  cartProduct3(id): Observable<Iproducts> {
    return this.http.get<Iproducts>(this.products3ApibyID + id);
  }

  deleteProduct(id): Observable<Iproducts> {
    return this.http.delete<Iproducts>(this.deleteProductByID + id, {
      headers: this.header
    });
  }
}
