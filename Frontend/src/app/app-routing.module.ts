import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";

const routes: Route[] = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "Home",
    component: HomeComponent
  },
  {
    path: "Products",
    loadChildren: "./Components/products/products.module#ProductsModule"
  },
  {
    path: "UserLogin",
    loadChildren: "./Components/login/login.module#LoginModule"
  },
  {
    path: "UserRegistration",
    loadChildren:
      "./Components/registration/registration.module#RegistrationModule"
  },
  {
    path: "About",
    loadChildren: "./Components/about/about.module#AboutModule"
  },
  {
    path: "ContactUs",
    loadChildren: "./Components/contact-us/contact-us.module#ContactUsModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
