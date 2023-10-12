import { TaskService } from './../shared/task.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {
  @Input()
  task: Task;

  @Output()
  onDeleteTask = new EventEmitter()


  constructor(private taskservice: TaskService) {}

  remove(task: Task){
    this.taskservice.delete(task._id).subscribe(() => {
      this.onDeleteTask.emit(task);
    });
  }

  OnCompletedCheck(task: Task) {
    this.taskservice.save(task).subscribe(task => {
      console.log(task);
    });
  }
}
