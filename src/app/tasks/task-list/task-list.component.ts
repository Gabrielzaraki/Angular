import { Task } from '../shared/task';
import { TaskService } from './../shared/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  tasks: Task[] = [];

  constructor(private TaskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.TaskService.getAll();
  }

}
