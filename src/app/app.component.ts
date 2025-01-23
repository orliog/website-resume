import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title: string = "Piotr Orlioglo";

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name: "keywords", content: "Java Developer, Full-stack Java Developer, DevOps Engineer" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Piotr Orlioglo" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { charset: "UTF-8" }
    ]);

    this.metaTagService.updateTag(
      { name: "description", content: "Hello, I'm a Full-stack Developer with 10+ years of experience. Find out more in my live-resume!" }
    );
  }
}
