import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module"; // angular routing
import { AppComponent } from "./app.component";

import { HomeComponent } from "./Components/home/home.component"; //home component
import { NavigationComponent } from "./Components/navigation/navigation.component"; //navigation component

import { userLoginData } from "./Shared/Services/userLoginService"; // api consumption service
import { HttpClientModule } from "@angular/common/http"; //Api consumption , user services

import { FormsModule, ReactiveFormsModule } from "@angular/forms"; //Registration

import { FloatingCartComponent } from "./Components/floating-cart/floating-cart.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FloatingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [userLoginData],
  bootstrap: [AppComponent]
})
export class AppModule {}
