import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input #taskInput type="text" placeholder="Nouvelle tâche" class="task-input" />
    <button class="button-task" (click)="addTask(taskInput.value); taskInput.value=''">➕ Ajouter</button>
  `,
  styles: [`
    input[type="text"] {
      padding: 8px;
      width: 70%;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
  padding: 8px 10px;
  margin-left: 6px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
    `]
})
export class TaskInputComponent {

    constructor(private taskService: TaskService){}

    addTask(nameTask: string) {
        if (nameTask.trim()) this.taskService.addTask(nameTask);
    }
}
