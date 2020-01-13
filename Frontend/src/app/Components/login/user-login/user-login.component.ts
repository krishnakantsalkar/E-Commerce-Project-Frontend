import { Component, OnInit } from "@angular/core";
import { userLoginData } from "../../../Shared/Services/userLoginService";
import { IuserLogin } from "../../../Shared/Model/userLogin";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { WOW } from "wowjs/dist/wow.min";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent implements OnInit {
  public newLogin: FormGroup;
  public submitted: boolean;
  public userId;
  public validateError: string;
  constructor(
    private UL: userLoginData,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    new WOW().init(); // Wow Animations on Html
    this.newLogin = this.fb.group({
      userLogin: this.fb.group({
        userEmail: ["", [Validators.required, Validators.email]],
        userPassword: ["", [Validators.required, Validators.minLength(8)]]
      })
    });
  }
  Save(data: IuserLogin) {
    this.submitted = true;
    if (!this.newLogin.valid) {
      return;
    }
    console.log(data);
    this.UL.Login(data).subscribe(
      item => {
        if (item.token) {
          this.userId = item.token;
          alert("login successful!");
          this.router.navigateByUrl("/Home");
          console.log(item);
        }
      },
      err => {
        this.validateError = err.error.message;
        alert("Invalid Email or password");
      }
    );
  }
}
