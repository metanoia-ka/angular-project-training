import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { Task } from '../../interface/task.interface';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
        <li *ngFor="let task of tasksGeneral; let i = index"></li>
        <span [class.completed]>{{ task.name }}</span>
        <button (click)="addOneTask(i)">✔️</button>
        <button (click)="removeTask(i)">❌</button>
    </ul>
  `,
  styles: ``
})
export class TaskListComponent {

    tasksGeneral: Task[] = [];

    constructor(private taskService: TaskService) {}

    getTasks(): Task[] {
        const taskGet = this.taskService.getTasks();
        this.tasksGeneral = taskGet;
        return this.tasksGeneral;
    }

    addOneTask(task: string) {
        this.taskService.addTask(task);
    }

    toggleTask(index: number) {
        this.taskService.toggleTaskStatus(index);
    }

    removeTask(index: number) {
        this.taskService.removeTask(index)
    }
}
