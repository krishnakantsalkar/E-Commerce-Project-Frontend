import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as xml2js from "xml2js";
import { NewsRss } from "../../../Shared/Model/rssfeed";

@Component({
  selector: "app-rssfeed",
  templateUrl: "./rssfeed.component.html",
  styleUrls: ["./rssfeed.component.css"]
})
export class RssfeedComponent implements OnInit {
  public RssData: NewsRss;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.GetRssFeedData();
  }

  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get<any>("https://gadgets.ndtv.com/rss/feeds", requestOptions)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
        });
      });
  }
}
