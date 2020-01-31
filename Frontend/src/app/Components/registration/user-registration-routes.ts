import { Route } from "@angular/router";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";

export const UserRegistration: Route[] = [   // child routing and lazy loading
  {
    path: "",
    component: UserRegistrationComponent
  }
];
