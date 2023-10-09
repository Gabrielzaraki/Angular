import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [
    {id: 1, description: 'Tarefa - 1', completed: false},
    {id: 2, description: 'Tarefa - 2', completed: true},
    {id: 3, description: 'Tarefa - 3', completed: true},
    {id: 4, description: 'Tarefa - 4', completed: false},

  ];

  constructor() { }

  getAll() {return this.tasks;}
}
