import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input #taskInput type="text" placeholder="Nouvelle tâche">
    <button (click)="addTask(taskInput.value); taskInput.value=''">➕ Ajouter</button>
  `,
  styles: ``
})
export class TaskInputComponent {

    constructor(private taskService: TaskService){}

    addTask(nameTask: string) {
        if (nameTask.trim()) this.taskService.addTask(nameTask);
    }
}
