import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { RouterModule } from "@angular/router";
import { ContactUs } from "./contact-us-routes";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ContactUsComponent],
  imports: [CommonModule, RouterModule.forChild(ContactUs), ReactiveFormsModule]
})
export class ContactUsModule {}
