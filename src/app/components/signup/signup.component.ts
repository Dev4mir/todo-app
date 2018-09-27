import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  constructor(
    private fg: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  signupForm = this.fg.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  ngOnInit() {
    // check if the user is logged in
    if (this.auth.isLoggedIn()) {
      // navigate to todo list
      this.router.navigateByUrl("/");
    }
  }

  signup() {
    this.auth.register(this.signupForm.value).subscribe(res => {
      // after registe the user we save the token and navigate to todo list
      this.auth.saveToken(res["token"]);
      this.router.navigateByUrl("/");
    });
  }
}
