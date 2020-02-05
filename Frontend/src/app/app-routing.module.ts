import { NgModule } from "@angular/core";
import { Route, RouterModule, CanActivate } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { authGuard } from "./Shared/Services/authGuard";

const routes: Route[] = [
  // Main Routing

  {
    path: "",
    component: HomeComponent // Home component to load by default
  },
  {
    path: "Home",
    component: HomeComponent // Home routing
  },
  {
    path: "Products/:page", // Products routing
    loadChildren: "./Components/products/products.module#ProductsModule",
    canActivate: [authGuard]
  },
  {
    path: "UserLogin", // userlogin routing
    loadChildren: "./Components/login/login.module#LoginModule"
  },
  {
    path: "UserRegistration", // user registration routing
    loadChildren:
      "./Components/registration/registration.module#RegistrationModule"
  },
  {
    path: "About", // about routing
    loadChildren: "./Components/about/about.module#AboutModule"
  },
  {
    path: "ContactUs", // contact us routing
    loadChildren: "./Components/contact-us/contact-us.module#ContactUsModule",
    canActivate: [authGuard]
  },
  {
    path: "MyProfile", //my profile routing
    loadChildren: "./Components/myprofile/myprofile.module#MyprofileModule",
    canActivate: [authGuard]
  },

  // Single Products Page Routing!

  {
    path: "Products/:id", //mobiles
    loadChildren:
      "./Components/single-product1/single-product1.module#SingleProduct1Module"
  },
  {
    path: "Products/product1/:id", // computers
    loadChildren:
      "./Components/single-product2/single-product2.module#SingleProduct2Module"
  },
  {
    path: "Products/product2/:id", // Ac
    loadChildren:
      "./Components/single-product3/single-product3.module#SingleProduct3Module"
  },
  {
    path: "Products/product3/:id", //fridge
    loadChildren:
      "./Components/single-product4/single-product4.module#SingleProduct4Module"
  },

  // Cart Page Routes

  {
    path: "Cart",
    loadChildren: "./Components/cart/cart.module#CartModule",
    canActivate: [authGuard]
  },

  // Wishlist Page Routes

  {
    path: "Wishlist",
    loadChildren: "./Components/wishlist/wishlist.module#WishlistModule"
  },

  // Forgot Password Routes

  {
    path: "ForgotPassword",
    loadChildren:
      "./Components/forgotpassword/forgotpassword.module#ForgotpasswordModule"
  },

  {
    path: "ResetPassword/:id",
    loadChildren:
      "./Components/resetpassword/resetpassword.module#ResetpasswordModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
