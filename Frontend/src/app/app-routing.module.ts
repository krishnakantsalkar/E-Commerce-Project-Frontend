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
    loadChildren: () =>
      import("./Components/products/products.module").then(
        m => m.ProductsModule
      ),
    canActivate: [authGuard]
  },
  {
    path: "UserLogin", // userlogin routing
    loadChildren: () =>
      import("./Components/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "UserRegistration", // user registration routing
    loadChildren: () =>
      import("./Components/registration/registration.module").then(
        m => m.RegistrationModule
      )
  },
  {
    path: "About", // about routing
    loadChildren: () =>
      import("./Components/about/about.module").then(m => m.AboutModule)
  },
  {
    path: "ContactUs", // contact us routing
    loadChildren: () =>
      import("./Components/contact-us/contact-us.module").then(
        m => m.ContactUsModule
      ),
    canActivate: [authGuard]
  },
  {
    path: "MyProfile", //my profile routing
    loadChildren: () =>
      import("./Components/myprofile/myprofile.module").then(
        m => m.MyprofileModule
      ),
    canActivate: [authGuard]
  },

  // Single Products Page Routing!

  {
    path: "Products/:id", //mobiles
    loadChildren: () =>
      import("./Components/single-product1/single-product1.module").then(
        m => m.SingleProduct1Module
      )
  },
  {
    path: "Products/product1/:id", // computers
    loadChildren: () =>
      import("./Components/single-product2/single-product2.module").then(
        m => m.SingleProduct2Module
      )
  },
  {
    path: "Products/product2/:id", // Ac
    loadChildren: () =>
      import("./Components/single-product3/single-product3.module").then(
        m => m.SingleProduct3Module
      )
  },
  {
    path: "Products/product3/:id", //fridge
    loadChildren: () =>
      import("./Components/single-product4/single-product4.module").then(
        m => m.SingleProduct4Module
      )
  },

  // Cart Page Routes

  {
    path: "Cart",
    loadChildren: () =>
      import("./Components/cart/cart.module").then(m => m.CartModule),
    canActivate: [authGuard]
  },

  // Wishlist Page Routes

  {
    path: "Wishlist",
    loadChildren: () =>
      import("./Components/wishlist/wishlist.module").then(
        m => m.WishlistModule
      )
  },

  // Forgot Password Routes

  {
    path: "ForgotPassword",
    loadChildren: () =>
      import("./Components/forgotpassword/forgotpassword.module").then(
        m => m.ForgotpasswordModule
      )
  },

  {
    path: "ResetPassword/:id",
    loadChildren: () =>
      import("./Components/resetpassword/resetpassword.module").then(
        m => m.ResetpasswordModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
