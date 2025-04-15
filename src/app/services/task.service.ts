import { Injectable } from '@angular/core';
import { Task } from '../interface/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    this.loadTasks();
  }

  private loadTasks() {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('tasks');
      this.tasks = data ? JSON.parse(data) : [];
    }
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasks() {
    return this.tasks;
  }

  addTask(newtask: string) {
    this.tasks.push({ name: newtask, completed: false });
    this.saveTasks();
  }

  toggleTaskStatus(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.saveTasks();
  }

  removeTask(index: number){
    this.tasks.splice(index, 1);
    this.saveTasks();
  }
}
