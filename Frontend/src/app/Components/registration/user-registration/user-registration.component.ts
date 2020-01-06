import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IuserReg } from "../../../Shared/Model/usersRegistration";
import { userRegisterData } from "../../../Shared/Services/userRegisterService";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.css"]
})
export class UserRegistrationComponent implements OnInit {
  public userForm: FormGroup;
  public userRegData: IuserReg;
  public router: Router;
  constructor(
    private fb: FormBuilder,
    private registerService: userRegisterData
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      firstname: [
        "",
        [
          Validators.required,
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
      newsLetterCheck: ["", Validators.required],
      userLogin: this.fb.group({
        userEmail: ["", [Validators.required, Validators.email]],
        userPassword: ["", [Validators.required]]
      }),
      termsAcceptCheck: ["", [Validators.required]]
      // sendConfirmationMail?: []
    });
  }
  Save(data) {
    console.log(data);
    this.registerService.Register(data).subscribe(item => {
      alert("Registration successfull!");
      this.router.navigateByUrl("/Home");
      console.log(item);
    });
  }
}
