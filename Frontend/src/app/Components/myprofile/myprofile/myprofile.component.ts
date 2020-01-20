import { Component, OnInit, OnDestroy } from "@angular/core";
import { userLoginData } from "../../../Shared/Services/userLoginService";
import { IuserReg } from "../../../Shared/Model/usersRegistration";

@Component({
  selector: "app-myprofile",
  templateUrl: "./myprofile.component.html",
  styleUrls: ["./myprofile.component.css"]
})
export class MyprofileComponent implements OnInit {
  public arrivedUsers: IuserReg;

  constructor(private UL: userLoginData) {}

  ngOnInit() {
    this.UL.myProfile().subscribe(item => {
      this.arrivedUsers = item;
      console.log(item);
    });
  }
}
