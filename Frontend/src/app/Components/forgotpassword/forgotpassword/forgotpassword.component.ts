import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { forgotPasswordData } from "../../../Shared/Services/forgotpasswordServices";
import { IforgotPassword } from "../../../Shared/Model/forgotPassword";
import { Router } from "@angular/router";

@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.component.html",
  styleUrls: ["./forgotpassword.component.css"]
})
export class ForgotpasswordComponent implements OnInit {
  public forgotForm: FormGroup; // formGroup for Reactive Forms
  public submitted: boolean;
  constructor(
    private fb: FormBuilder, //form builder
    private forgotData: forgotPasswordData, // forgotpass services
    private router: Router
  ) {}

  ngOnInit() {
    this.forgotForm = this.fb.group({
      userLogin: this.fb.group({
        userEmail: ["", [Validators.required, Validators.email]]
      })
    });
  }

  Save(data: IforgotPassword) {
    this.submitted = true;
    if (!this.forgotForm.valid) {
      // if login form not valid , return
      return;
    }
    console.log(data); // send mail for password reset token
    this.forgotData.resetPasswordMailer(data).subscribe(
      item => {
        console.log(item);
        alert("Email Sent Successfully!");
        this.router.navigateByUrl("/Home"); // navigate to home and wait for mail
      },
      err => {
        // error handling
        console.log(err);
        alert(err.error.message);
      }
    );
  }

  get f() {
    return this.forgotForm.controls;
  }
}
