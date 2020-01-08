import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IcontactUs } from "../../../Shared/Model/contactUs";
import { contactUsData } from "../../../Shared/Services/contactUsServices";
import { WOW } from "wowjs/dist/wow.min";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"]
})
export class ContactUsComponent implements OnInit {
  public contactUs_form: FormGroup;
  public IContactusData: IcontactUs;
  public router: Router;

  constructor(
    private fb: FormBuilder,
    private contactUsDataApi: contactUsData
  ) {}

  ngOnInit() {
    new WOW().init(); // WOW animations in HTML
    this.contactUs_form = this.fb.group({
      name: [
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(20)]
      ],
      email: ["", [Validators.required]],
      message: [""]
    });
  }
  Save(data) {
    console.log(data);
    this.contactUsDataApi.contact(data).subscribe(item => {
      alert("Message Sent! Thank you for Contacting ");
      this.router.navigateByUrl("/ContactUs");
      console.log(item);
    });
  }
}
