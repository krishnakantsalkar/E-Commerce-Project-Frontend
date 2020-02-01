import { Route } from "@angular/router";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";

export const forgotpassword: Route[] = [  // child routing & lazy loading
  {
    path: "",
    component: ForgotpasswordComponent
  }
];
