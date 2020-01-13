import { Component, OnInit } from "@angular/core";
import { WOW } from "wowjs/dist/wow";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Frontend";
  ngOnInit() {
    new WOW().init();
  }
}
