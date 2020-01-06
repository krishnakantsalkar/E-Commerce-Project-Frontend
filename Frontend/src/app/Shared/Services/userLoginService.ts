import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IuserLogin } from "../Model/userLogin";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class userLoginData {
  public userLoginApi: string = "http://localhost:4500/api/login/Logon";
  public header: HttpHeaders;
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ "Content-Type": "application/json" });
  }

  Login(data: IuserLogin): Observable<IuserLogin[]> {
    return this.http.post<IuserLogin[]>(
      this.userLoginApi,
      JSON.stringify(data),
      { headers: this.header }
    );
  }
}
