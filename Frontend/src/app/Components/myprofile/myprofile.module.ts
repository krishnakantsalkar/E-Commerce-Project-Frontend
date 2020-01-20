import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyprofileComponent } from "./myprofile/myprofile.component";
import { RouterModule } from "@angular/router";
import { myprofile } from "./myprofile-routes";

@NgModule({
  declarations: [MyprofileComponent],
  imports: [CommonModule, RouterModule.forChild(myprofile)]
})
export class MyprofileModule {}
