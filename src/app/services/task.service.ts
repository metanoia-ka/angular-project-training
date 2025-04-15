import { Injectable } from '@angular/core';
import { Task } from '../interface/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { name: 'Lire un livre', completed: false },
    { name: 'Coder une app Angular', completed: true },
  ];

  getTasks() {
    return this.tasks;
  }

  addTask(newtask: string) {
    this.tasks.push({ name: newtask, completed: false });
  }

  toggleTaskStatus(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  removeTask(index: number){
    this.tasks.splice(index, 1);
  }
}
