import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private fg: FormBuilder,
    private router: Router,
    private auth: AuthService,
    public snackBar: MatSnackBar
  ) {}

  loginForm = this.fg.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl("/");
    }
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe(res => {
      if (res[0] !== undefined) {
        let token = res[0].token;
        this.auth.saveToken(token);
        this.router.navigateByUrl("/");
      } else {
        // to simulate the error handling if it's not mocked API
        this.snackBar.open("Email or Password wrong!");
      }
    });
  }
}
