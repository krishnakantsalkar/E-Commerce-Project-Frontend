import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public likes: number;
  public activeHeart: boolean;
  constructor() {}

  ngOnInit() {
    this.likes = 0;
  }

  like() {
    this.likes++;
  }
  dislike() {
    this.likes--;
    if (this.likes < 0) {
      this.likes = 0;
    }
    return this.likes;
  }

  likeHeart() {
    this.activeHeart = !this.activeHeart;
  }
}
