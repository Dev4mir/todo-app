import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { User } from "../../interfaces/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  // the end point for API
  private url: string = "http://localhost:3000/users";
  private token: string;

  constructor(private http: HttpClient, private router: Router) {}

  // method to save the token
  public saveToken(token: string): void {
    localStorage.setItem("appToken", token);
    this.token = token;
  }

  // generate token for every registed user
  public generateToken() {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 12; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  // get the token from browser local storage
  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("appToken");
    }
    return this.token;
  }

  // check if there is a logged in user
  public isLoggedIn() {
    const token = this.getToken();
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  public getUserDetails() {
    if (this.isLoggedIn()) {
      return this.http.get(`${this.url}?token=${this.getToken()}`);
    }
  }

  // login method
  public login(user: User) {
    return this.http.get(
      `${this.url}/?email=${user.email}&password=${user.password}`
    );
  }

  //register method
  public register(user: User) {
    //generate fake token for the user
    user.token = this.generateToken();
    return this.http.post(`${this.url}`, user);
  }

  // logout method
  public logout() {
    this.token = "";
    localStorage.removeItem("appToken");
    this.router.navigateByUrl("/login");
  }
}
