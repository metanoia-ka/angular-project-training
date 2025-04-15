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
        <li *ngFor="let task of tasksGeneral; let i = index">
            <span [class.completed]="task.completed">{{ task.name }}</span>
            <button (click)="toggleTask(i)">✔️</button>
            <button (click)="removeTask(i)">❌</button>
      </li>
    </ul>
  `,
  styles: [
    `
    ul {
      list-style: none;
      padding: 0;
    }
    .completed {
      text-decoration: line-through;
      color: gray;
    }
    li {
      margin-bottom: 10px;
    }
    input {
      padding: 10px;
      margin: 10px 5px;
      border-radius: 6px;
      border: 1px solid #ccc;
    }
    button {
      background-color: #2a9d8f;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 6px;
      margin-left: 8px;
      cursor: pointer;
      transition: transform 0.2s ease;
    }
    .completed {
      text-decoration: line-through;
      color: grey;
      transition: all 0.3s ease;
    }

    li {
      list-style: none;
      margin: 10px 0;
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    button:hover {
      transform: scale(1.1);
    }
  `
  ]
})
export class TaskListComponent {

    tasksGeneral: Task[] = [];

    constructor(private taskService: TaskService) {}

    ngOnInit(): void {
        this.tasksGeneral = this.taskService.getTasks();
    }
    
    toggleTask(index: number): void {
        this.taskService.toggleTaskStatus(index);
    }

    removeTask(index: number): void {
        this.taskService.removeTask(index);
    }
}
