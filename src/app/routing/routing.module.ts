import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "../components/login/login.component";
import { SignupComponent } from "../components/signup/signup.component";
import { TodosComponent } from "../components/todos-module/todos/todos.component";

import { AuthGuard } from "./../guards/auth-guard/auth-guard.guard";

// init routes for the routing
const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "",
    component: TodosComponent,
    // add guard to make sure that this route won't active untill the user is authenticated
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
