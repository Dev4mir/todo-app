import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";

import { RoutingModule } from "./routing/routing.module";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
