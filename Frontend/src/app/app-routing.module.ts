import { NgModule } from "@angular/core";
import { Route, RouterModule, CanActivate } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { authGuard } from "./Shared/Services/authGuard";

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
    loadChildren: "./Components/contact-us/contact-us.module#ContactUsModule",
    canActivate: [authGuard]
  },
  {
    path: "MyProfile",
    loadChildren: "./Components/myprofile/myprofile.module#MyprofileModule",
    canActivate: [authGuard]
  },

  // Single Products Page Routing!

  {
    path: "Products/product1",
    loadChildren:
      "./Components/single-product1/single-product1.module#SingleProduct1Module"
  },
  {
    path: "Products/product2",
    loadChildren:
      "./Components/single-product2/single-product2.module#SingleProduct2Module"
  },
  {
    path: "Products/product3",
    loadChildren:
      "./Components/single-product3/single-product3.module#SingleProduct3Module"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
