import { Route } from "@angular/router";
import { ResetpasswordComponent } from "./resetpassword/resetpassword.component";

export const resetpassword: Route[] = [  // // child routing & lazy loading
  {
    path: "",
    component: ResetpasswordComponent
  }
];
