import { Component, OnInit, Input } from "@angular/core";

import { TodoService } from "../../../services/todo/todo.service";
import { Todo } from "../../../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  // define the props that came pass from the parent element
  @Input()
  todo: Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  doneTodo() {
    let todo = this.todo;
    // change the done prop to be true
    todo.done = true;

    this.todoService.doneTodo(todo).subscribe(res => console.log(res));
  }
}
