import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../../interfaces/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  // the end point for API
  private url: string = "http://localhost:3000";
  private token: string;

  constructor(private http: HttpClient) {}

  public saveToken(token: string): void {
    localStorage.setItem("appToken", token);
    this.token = token;
  }

  public generateToken() {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 12; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("appToken");
    }
    return this.token;
  }

  public isLoggedIn() {
    const token = this.getToken();
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  public login(user: User) {
    return this.http.get(
      `${this.url}/users?email=${user.email}&password=${user.password}`
    );
  }
}
