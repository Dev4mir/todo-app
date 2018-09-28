import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";

import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  addTodo(): void {
    this.dialog.open(AddTodoComponent);
  }
}
