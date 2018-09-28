import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private url: string = "http://localhost:3000/todos";
  private userId: number;

  constructor(private http: HttpClient) {}

  // Get todos
  public getTodos($userId) {
    this.userId = $userId;
    return this.http.get(`${this.url}?UID=${$userId}`);
  }

  // Add new todo
  public addTodo($data) {
    let data = $data;
    // Add user id for the new todo
    data.UID = this.userId;

    return this.http.post(this.url, $data);
  }

  // Modify todo when it's done
  public doneTodo($todo) {
    return this.http.put(`${this.url}/${$todo.id}`, $todo);
  }
}
