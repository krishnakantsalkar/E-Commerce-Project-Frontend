import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Icart } from "../Model/cartModel";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class cartData {
  public header: HttpHeaders;
  public addtoCartApi: string = "http://localhost:4500/api/cart/addtoCart";
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      "Content-type": "application/json",
      "x-auth-token": JSON.parse(localStorage.getItem("currentToken"))
    });
  }

  addtoCartbyApi(data: Icart): Observable<Icart> {
    return this.http.post<Icart>(this.addtoCartApi, JSON.stringify(data), {
      headers: this.header
    });
  }
}
