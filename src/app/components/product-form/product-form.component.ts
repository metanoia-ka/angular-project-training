import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="submit()">
      <input [(ngModel)]="name" name="name" placeholder="Nom du produit" required />
      <input [(ngModel)]="price" name="price" placeholder="Prix" type="number" required />
      <input [(ngModel)]="image" name="image" placeholder="URL de l'image" required />
      <button type="submit">✔️ Ajouter</button>
    </form>
  `,
  styles: [
    `
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
      max-width: 350px;
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
  `
  ]
})
export class ProductFormComponent {
  name!: string;
  price!: number;
  image!: string;

  @Output() add = new EventEmitter<{ name: string; price: number; image: string }>();

  submit() {
    if (this.name && this.price > 0 && this.image) {
      this.add.emit({ name: this.name, price: this.price, image: this.image });
      this.name = '';
      this.price = 0;
      this.image = '';
    }
  }
}
