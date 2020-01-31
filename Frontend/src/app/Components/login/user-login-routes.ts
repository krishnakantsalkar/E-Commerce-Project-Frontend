import { Route } from "@angular/router";
import { UserLoginComponent } from "./user-login/user-login.component";

export const UserLogin: Route[] = [     // child routing and lazy loading
  {
    path: "",
    component: UserLoginComponent
  }
];
