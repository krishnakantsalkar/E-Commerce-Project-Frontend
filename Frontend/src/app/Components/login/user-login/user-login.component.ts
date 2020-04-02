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
  public validateError: string; //error checking
  public showpass: boolean;
  constructor(
    private UL: userLoginData, // login API
    private fb: FormBuilder,
    private router: Router
  ) {
    this.showpass = false;
  }

  ngOnInit() {
    new WOW({ live: false }).init(); // Wow Animations on Html
    this.newLogin = this.fb.group({
      //Reactive forms method
      userLogin: this.fb.group({
        userEmail: ["", [Validators.required, Validators.email]],
        userPassword: ["", [Validators.required, Validators.minLength(8)]] //Validation
      })
    });
  }
  Save(data: IuserLogin) {
    //Save method on ngSubmit
    this.submitted = true;
    if (!this.newLogin.valid) {
      // if login form not valid , return
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

  showPass() {
    this.showpass = !this.showpass;
  }

  get f() {
    return this.newLogin.controls;
  }
}
