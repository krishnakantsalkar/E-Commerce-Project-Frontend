import { Component, OnInit } from "@angular/core";
import { WOW } from "wowjs/dist/wow.min";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    new WOW().init();
  }
}
