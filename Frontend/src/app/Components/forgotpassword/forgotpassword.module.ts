import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { RouterModule } from "@angular/router";
import { forgotpassword } from "./forgotpassword-routes";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ForgotpasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(forgotpassword),
    ReactiveFormsModule
  ]
})
export class ForgotpasswordModule {}
