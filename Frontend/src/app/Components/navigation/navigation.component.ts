import { Component, OnInit } from "@angular/core";
import { userLoginData } from "../../Shared/Services/userLoginService";
import { Router } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  public checkStatus: any;
  constructor(private logoutMethod: userLoginData, private router: Router) {}

  ngOnInit() {
    this.logoutMethod.currentUsers.subscribe(data => {
      this.checkStatus = data;
    });
  }
  Logout() {
    this.logoutMethod.Logout();
    this.router.navigateByUrl("/Home");
  }
}
