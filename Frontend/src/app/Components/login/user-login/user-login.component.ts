import { Component, OnInit } from "@angular/core";
import { userLoginData } from "../../../Shared/Services/userLoginService";
import { IuserLogin } from "../../../Shared/Model/userLogin";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent implements OnInit {
  public newLogin: FormGroup;
  constructor(private UL: userLoginData, private fb: FormBuilder) {}

  ngOnInit() {
    this.newLogin = this.fb.group({
      userLogin: this.fb.group({
        userEmail: ["", [Validators.required, Validators.email]],
        userPassword: ["", [Validators.required]]
      })
    });
  }
  Save(data) {
    console.log(data);
    this.UL.Login(data).subscribe(item => {
      alert("login successful!");
      console.log(item);
    });
  }
}
