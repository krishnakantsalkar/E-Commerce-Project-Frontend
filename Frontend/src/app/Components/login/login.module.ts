import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserLoginComponent } from "./user-login/user-login.component";
import { RouterModule } from "@angular/router";
import { UserLogin } from "./user-login-routes";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [UserLoginComponent],
  imports: [CommonModule, RouterModule.forChild(UserLogin), ReactiveFormsModule]
})
export class LoginModule {}
