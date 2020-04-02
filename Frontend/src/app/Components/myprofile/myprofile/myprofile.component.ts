import { Component, OnInit, OnDestroy } from "@angular/core";
import { userLoginData } from "../../../Shared/Services/userLoginService";
import { IuserReg } from "../../../Shared/Model/usersRegistration";
import { WOW } from "wowjs/dist/wow.min";

@Component({
  selector: "app-myprofile",
  templateUrl: "./myprofile.component.html",
  styleUrls: ["./myprofile.component.css"]
})
export class MyprofileComponent implements OnInit {
  public arrivedUsers: IuserReg;

  constructor(private UL: userLoginData) {}

  ngOnInit() {
    new WOW({ live: false }).init(); //enable wow animations
    this.UL.myProfile().subscribe(item => {
      // get profile data by id of loggedin user
      this.arrivedUsers = item;
      console.log(item);
    });
  }
}
