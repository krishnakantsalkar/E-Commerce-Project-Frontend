import { Component, OnInit } from "@angular/core";
import { WOW } from "wowjs/dist/wow";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Shockwave's Assembly";
  constructor(private titleService: Title) {}
  ngOnInit() {
    new WOW().init();
    this.titleService.setTitle(this.title);
  }
}
