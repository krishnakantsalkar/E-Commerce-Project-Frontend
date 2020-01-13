import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { userLoginData } from "./userLoginService";

@Injectable({ providedIn: "root" })
export class authGuard implements CanActivate {
  constructor(private userLoginGuard: userLoginData, private router: Router) {}
  canActivate() {
    let newToken = localStorage.getItem("currentUser");
    if (!newToken) {
      alert("Please Login First!");
      this.router.navigateByUrl("/UserLogin");
      return false;
    } else {
      return true;
    }
  }
}
