import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IuserReg } from "../../../Shared/Model/usersRegistration";
import { userRegisterData } from "../../../Shared/Services/userRegisterService";
import { Router } from "@angular/router";
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { WOW } from "wowjs/dist/wow.min";

@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.css"]
})
export class UserRegistrationComponent implements OnInit {
  public userForm: FormGroup; // Main formGroup
  public userRegData: IuserReg; // Interface correlating to DB
  public error: any; // error handling to UI
  public submitted: boolean;

  constructor(
    private fb: FormBuilder, // dependancy injection to form builder
    private registerService: userRegisterData, //  dependancy injection to Register Services
    private router: Router //  dependancy injection to Router
  ) {}

  ngOnInit() {
    new WOW({ live: false }).init(); // Wow Animations in HTML

    this.userForm = this.fb.group({
      //main form group
      firstname: [
        "",
        [
          Validators.required, ////validations
          Validators.minLength(5),
          Validators.maxLength(100)
        ]
      ],
      lastname: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100)
        ]
      ],
      newsLetterCheck: ["", [Validators.required, Validators.requiredTrue]],
      userLogin: this.fb.group({
        //sub form group
        userEmail: ["", [Validators.required, Validators.email]],
        userPassword: ["", [Validators.required, Validators.minLength(8)]]
      }),
      termsAcceptCheck: ["", [Validators.required, Validators.requiredTrue]]
      // sendConfirmationMail?: []          // optional send confirmation mail check backend APIs
    });
  }

  Save(data) {
    this.submitted = true;
    if (!this.userForm.valid) {
      return;
    }
    // Save function on Submit in UI
    console.log(data);
    this.registerService.Register(data).subscribe(
      // services usage
      item => {
        if (item.token) {
          alert(item.message);
          this.router.navigateByUrl("/Home");
          console.log(item);
        }
      },
      error => {
        //error handling to be shown to user
        console.log(error);
        alert("Check entered data or Email Id alredy exists");
      }
    );
  }

  get f() {
    return this.userForm.controls;
  }
}
