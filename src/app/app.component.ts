import { Component } from '@angular/core';
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { CommonModule } from '@angular/common';
import { TaskInputComponent } from "./components/task-input/task-input.component";
import { TaskListComponent } from "./components/task-list/task-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductFormComponent, 
            TaskInputComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  products = [
    {
      name: 'Clavier Mécanique',
      price: 99,
      image: 'https://via.placeholder.com/300x150?text=Clavier'
    },
    {
      name: 'Écran 24"',
      price: 149,
      image: 'https://via.placeholder.com/300x150?text=Écran'
    }
  ];

  addProduct(product: { name: string; price: number; image: string }) {
    this.products.push(product);
  }
}
