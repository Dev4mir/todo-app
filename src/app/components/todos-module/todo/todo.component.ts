import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  // define the props that came pass from the parent element
  @Input()
  todoBody: string;
  @Input()
  todoIsDone: boolean;

  constructor() {}

  ngOnInit() {}
}
