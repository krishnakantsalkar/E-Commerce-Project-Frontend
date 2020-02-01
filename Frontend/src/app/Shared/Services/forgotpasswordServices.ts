import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { IforgotPassword } from "../Model/forgotPassword";

@Injectable({ providedIn: "root" })
export class forgotPasswordData {
  public mailer: string = "http://localhost:4500/api/mailer";   // send forgot password mail
  public reset: string = "http://localhost:4500/api/forgot/forgotPassword/"; // reset password
  public header;
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ "Content-Type": "application/json" });
  }

  // Send Mail to reset pass API consumption
  resetPasswordMailer(data: IforgotPassword): Observable<IforgotPassword> {
    return this.http.post<IforgotPassword>(this.mailer, JSON.stringify(data), {
      headers: this.header
    });
  }

  // Reset password API comsumption
  resetPassword(id, data) {   // send id which we get in mail url, data from form data
    return this.http.post(this.reset + id, JSON.stringify(data), {
      headers: this.header
    });
  }
}
