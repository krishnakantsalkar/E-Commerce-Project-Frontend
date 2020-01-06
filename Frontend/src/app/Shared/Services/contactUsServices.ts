import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { IcontactUs } from "../Model/contactUs";
import { Observable } from "rxjs";
@Injectable({ providedIn: "root" })
export class contactUsData {
  public contactUsApi: string = "http://localhost:4500/api/contact/contactUs";
  public header: HttpHeaders;
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ "Content-Type": "application/html" });
  }
  contact(data: IcontactUs): Observable<IcontactUs[]> {
    return this.http.post<IcontactUs[]>(
      this.contactUsApi,
      JSON.stringify(data),
      { headers: this.header }
    );
  }
}
