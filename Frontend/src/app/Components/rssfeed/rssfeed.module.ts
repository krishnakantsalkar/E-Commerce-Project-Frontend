import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RssfeedComponent } from "./rssfeed/rssfeed.component";
import { RouterModule } from "@angular/router";
import { rssfeed } from "./rssfeed-routes";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [RssfeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(rssfeed),
    HttpClientModule,
    FormsModule
  ]
})
export class RssfeedModule {}
