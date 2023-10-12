import { enviroment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Task[]>(`${enviroment.api}/tasks`);
  }

  getById(id: string) {
    return this.http.get<Task>(`${enviroment.api}/tasks/${id}`);
  }

  save(task: Task) {
    const taskbody = {
      description: task.description,
        completed: task.completed
    };
    if (task._id) {
      return this.http.put<Task>(`${enviroment.api}/tasks/${task._id}`, taskbody);


    } else {
      return this.http.post<Task>(`${enviroment.api}/tasks/`, taskbody);


    }
  }

  delete(id: string) {
    return this.http.delete(`${enviroment.api}/tasks/${id}`);
  }
}
