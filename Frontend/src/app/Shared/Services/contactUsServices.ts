import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { IcontactUs } from "../Model/contactUs";
import { Observable } from "rxjs";
@Injectable({ providedIn: "root" })
export class contactUsData {
  public contactUsApi: string = "http://localhost:4500/api/contact/contactUs"; // contact us api
  public header: HttpHeaders;
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ "Content-Type": "application/html" });
  }
  contact(data: IcontactUs): Observable<IcontactUs[]> {  //api consumption
    return this.http.post<IcontactUs[]>(
      this.contactUsApi,
      JSON.stringify(data),
      { headers: this.header }
    );
  }
}
