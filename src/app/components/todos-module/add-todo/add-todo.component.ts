import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.scss"]
})
export class AddTodoComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AddTodoComponent>,
    private fg: FormBuilder
  ) {}

  ngOnInit() {}

  addTodoForm = this.fg.group({
    body: ["", Validators.required],
    done: [false]
  });

  addTodo() {
    console.log(this.addTodoForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
