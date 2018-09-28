import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      "list",
      sanitizer.bypassSecurityTrustResourceUrl("assets/icons/list.svg")
    );
    iconRegistry.addSvgIcon(
      "arrow-forward",
      sanitizer.bypassSecurityTrustResourceUrl("assets/icons/arrow_forward.svg")
    );
    iconRegistry.addSvgIcon(
      "close",
      sanitizer.bypassSecurityTrustResourceUrl("assets/icons/close.svg")
    );
  }
}
