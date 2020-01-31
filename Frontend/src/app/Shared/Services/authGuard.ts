import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { userLoginData } from "./userLoginService";

@Injectable({ providedIn: "root" })
export class authGuard implements CanActivate {
  constructor(private userLoginGuard: userLoginData, private router: Router) {}
  canActivate() {
    let newToken = localStorage.getItem("currentUser");  // to check if user logged in or not
    if (!newToken) {
      alert("Please Login First!");
      this.router.navigateByUrl("/UserLogin"); // if not logged in login first
      return false;
    } else {
      return true;
    }
  }
}
