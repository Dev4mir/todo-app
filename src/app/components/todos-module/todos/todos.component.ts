import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";

import { AddTodoComponent } from "../add-todo/add-todo.component";
import { AuthService } from "../../../services/auth/auth.service";
import { TodoService } from "../../../services/todo/todo.service";
import { User } from "../../../interfaces/user";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent implements OnInit {
  user: User;
  todos;
  constructor(
    private dialog: MatDialog,
    private auth: AuthService,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    // Get the user details to show them in the view
    this.auth.getUserDetails().subscribe(
      res => {
        this.user = res[0];
      },
      err => console.log(err),
      () => {
        this.todoService
          .getTodos(this.user.id)
          .subscribe(res => (this.todos = res));
      }
    );
  }

  addTodo(): void {
    // opens add dialog and if there is a data after close
    // push the data(new todo) to todos array.
    this.dialog
      .open(AddTodoComponent)
      .afterClosed()
      .subscribe(res => {
        if (res !== undefined) {
          this.todos.push(res);
        }
      });
  }

  logout(): void {
    this.auth.logout();
  }
}
