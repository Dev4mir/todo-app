import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { FormBuilder, Validators } from "@angular/forms";

import { TodoService } from "../../../services/todo/todo.service";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.scss"]
})
export class AddTodoComponent implements OnInit {
  private newTodo;

  constructor(
    private dialogRef: MatDialogRef<AddTodoComponent>,
    private fg: FormBuilder,
    private todoService: TodoService
  ) {}

  ngOnInit() {}

  addTodoForm = this.fg.group({
    body: ["", Validators.required],
    done: [false]
  });

  addTodo() {
    this.todoService.addTodo(this.addTodoForm.value).subscribe(
      res => {
        console.log(res);
        this.newTodo = res;
      },
      err => console.log(err),
      () => {
        this.close();
      }
    );
  }

  close() {
    this.dialogRef.close(this.newTodo);
  }
}
