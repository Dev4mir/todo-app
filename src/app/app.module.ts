import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";

import { RoutingModule } from "./routing/routing.module";
import { SignupComponent } from "./components/signup/signup.component";
import { TaskComponent } from "./components/tasks-module/task/task.component";
import { TasksComponent } from "./components/tasks-module/tasks/tasks.component";
import { AddTaskComponent } from "./components/tasks-module/add-task/add-task.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TaskComponent,
    TasksComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
