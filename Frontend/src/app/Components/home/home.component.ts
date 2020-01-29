import { Component, OnInit, ElementRef } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public likes: number;
  public activeHeart: boolean;
  constructor(private elementRef: ElementRef) {}

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

  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://weatherwidget.io/js/widget.min.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}
