import { Component, OnInit } from "@angular/core";
import { forgotPasswordData } from "../../../Shared/Services/forgotpasswordServices";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IresetPassword } from "../../../Shared/Model/resetpassword";
import { Router } from "@angular/router";

@Component({
  selector: "app-resetpassword",
  templateUrl: "./resetpassword.component.html",
  styleUrls: ["./resetpassword.component.css"]
})
export class ResetpasswordComponent implements OnInit {
  public resetForm: FormGroup;  // formGroup for Reactive Forms
  public url: any[];   // store token from mail's url to be used below
  constructor(
    private fb: FormBuilder,    // form builder
    private forgotData: forgotPasswordData,  // forgot pass services
    private router: Router
  ) {}

  ngOnInit() {
    this.resetForm = this.fb.group({
      userLogin: this.fb.group({
        userPassword: ["", [Validators.required, Validators.min(8)]]
      })
    });

    this.getURL();  // 1 - custom method to get token that was sent in mail as url
  }

  Save(data: IresetPassword) {
    // 3 - pass the 4th index which contains token to parameterized routing's id
    let id = this.url[4];   
    console.log(id, data);

    // 4 - since we need both id(token) and form data for reset password
    this.forgotData.resetPassword(id, data).subscribe(  
      item => {
        console.log(item);
        alert("Password Changed Successfully");
        this.router.navigateByUrl("/Login");
      },
      err => {
        console.log(err.error.message);
        alert(err.error.message);
      }
    );
  }

  getURL() {   // 2 - this method splits and save url items in array
    this.url = window.location.href.split("/");
  }
}
