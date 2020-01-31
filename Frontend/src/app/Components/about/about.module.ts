import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "./about/about.component";
import { RouterModule } from "@angular/router";
import { About } from "./about-routes";

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, RouterModule.forChild(About)] // forChild routing & Lazy Loading
})
export class AboutModule {}
