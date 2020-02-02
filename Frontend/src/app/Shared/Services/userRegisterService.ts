import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { IuserReg } from "../Model/usersRegistration";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class userRegisterData {
  public userRegisterApi: string =
    "http://localhost:4500/api/users/Registration"; // user Registration API
  public header: HttpHeaders;
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ "Content-Type": "application/json" });
  }
  Register(data: IuserReg): Observable<IuserReg> {
    return this.http.post<IuserReg>( // user reg API consumption
      this.userRegisterApi,
      JSON.stringify(data),
      { headers: this.header }
    );
  }
}
