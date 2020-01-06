import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { RouterModule } from "@angular/router";
import { UserRegistration } from "./user-registration-routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; // User Registration [Reactive Form]
@NgModule({
  declarations: [UserRegistrationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRegistration),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistrationModule {}
