import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {
  MatIconModule,
  MatCheckboxModule,
  MatDialogModule,
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS
} from "@angular/material";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";

import { RoutingModule } from "./routing/routing.module";
import { SignupComponent } from "./components/signup/signup.component";
import { AddTodoComponent } from "./components/todos-module/add-todo/add-todo.component";
import { TodoComponent } from "./components/todos-module/todo/todo.component";
import { TodosComponent } from "./components/todos-module/todos/todos.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddTodoComponent,
    TodoComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  entryComponents: [AddTodoComponent],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2000 } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
